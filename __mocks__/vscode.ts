export const window = {
  withProgress: jest.fn(),
  showErrorMessage: jest.fn(),
  setStatusBarMessage: jest.fn(),
};

export const workspace = {
  getConfiguration: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue(''),
  }),
};

export const commands = {
  executeCommand: jest.fn(),
};

export const ProgressLocation = {
  Notification: 15,
  SourceControl: 1,
  Window: 10,
};

export const Uri = {
  file: jest.fn((p: string) => ({ fsPath: p })),
};
