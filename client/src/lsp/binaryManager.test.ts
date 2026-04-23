import { window } from 'vscode';

describe('vscode mock', () => {
  it('window mock is available', () => {
    expect(window.showErrorMessage).toBeDefined();
  });
});
