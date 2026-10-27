// Text helpers over Craft source, shared by the preview commands.

// mask blanks out string contents and `//` comments (keeping every offset and
// newline) so braces and keys can be found in code only.
export function mask(text: string): string {
    let out = '';
    let inString = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inString) {
            if (c === '\\' && i + 1 < text.length && text[i + 1] !== '\n') {
                out += '  ';
                i++;
            } else if (c === '"' || c === '\n') {
                inString = false;
                out += c;
            } else {
                out += ' ';
            }
        } else if (c === '"') {
            inString = true;
            out += c;
        } else if (c === '/' && text[i + 1] === '/' && (i === 0 || /\s/.test(text[i - 1]))) {
            while (i < text.length && text[i] !== '\n') {
                out += ' ';
                i++;
            }
            if (i < text.length) {
                out += '\n';
            }
        } else {
            out += c;
        }
    }
    return out;
}

// closingBrace returns the offset of the `}` that closes the `{` at open, or
// the end of the text when it is not closed.
export function closingBrace(masked: string, open: number): number {
    let depth = 0;
    for (let i = open; i < masked.length; i++) {
        if (masked[i] === '{') {
            depth++;
        } else if (masked[i] === '}') {
            depth--;
            if (depth === 0) {
                return i;
            }
        }
    }
    return masked.length;
}

// useCaseNames lists the quoted names of `use_case "…" {` blocks, in order.
export function useCaseNames(text: string): string[] {
    return useCaseBlocks(text).map(b => b.name);
}

// useCaseAt returns the name of the use case whose block holds line (0-based).
export function useCaseAt(text: string, line: number): string | undefined {
    return useCaseBlocks(text).find(b => line >= b.first && line <= b.last)?.name;
}

function useCaseBlocks(text: string): { name: string; first: number; last: number }[] {
    const masked = mask(text);
    const lineOf = (offset: number): number => text.slice(0, offset).split('\n').length - 1;
    const out: { name: string; first: number; last: number }[] = [];
    const re = /(^|\n)[ \t]*use_case[ \t]+"([^"\n]*)"[^{\n]*\{/g;
    for (let m = re.exec(masked); m; m = re.exec(masked)) {
        const open = m.index + m[0].length - 1;
        out.push({
            name: text.slice(m.index + m[0].indexOf('"') + 1, m.index + m[0].indexOf('"') + 1 + m[2].length),
            first: lineOf(m.index + m[1].length),
            last: lineOf(closingBrace(masked, open)),
        });
    }
    return out;
}
