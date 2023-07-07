export interface CodeJarContainer extends HTMLElement {
  textContent: string | null;
}

export interface CodeJarOptions{
  tab?: string;
  tabSize?: number;
  indentOn?: RegExp;
  moveToNewLine?: RegExp;
  spellcheck?: boolean;
  catchTab?: boolean;
  preserveIdent?: boolean;
  addClosing?: boolean;
  history?: boolean;
  window?: typeof window;
}
