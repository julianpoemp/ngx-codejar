import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {CodeJar, Position} from 'codejar';
import {CodeJarContainer} from './codejar.typings';
import {withLineNumbers} from 'codejar/linenumbers.js';

@Component({
  selector: 'ngx-codejar',
  template: `
    <pre #editor class="editor" [ngClass]="{
            'hljs': highlighter === 'hljs',
            'language-typescript': highlighter === 'prism',
            'ngx-codejar-editor': highlighter !== undefined
         }"></pre>`,
  styles: [`
    :host {
      display: block;
    }

    .ngx-codejar-editor {
      border: 1px solid gray;
      border-radius: 6px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      font-family: "Source Code Pro", monospace;
      font-size: 14px;
      font-weight: 400;
      min-height: 240px;
      letter-spacing: normal;
      line-height: 20px;
      padding: 10px;
      tab-size: 4;
    }
  `]
})
export class NgxCodeJarComponent implements OnInit, AfterViewInit, OnChanges {
  constructor() {
    this.update = new EventEmitter<string>();
  }

  @ViewChild('editor') editor: ElementRef | undefined;
  private codeJar: CodeJar;

  @Input() code = '';
  @Input() showLineNumbers = false;
  @Output() codeChange = new EventEmitter<string>();

  @Input() highlighter: 'prism' | 'hljs' = 'hljs';

  // Events
  /**
   * is triggered after highlighting
   */
  @Output() update: EventEmitter<string>;
  @Input() highlightMethod: (editor: CodeJarContainer, pos?: Position) => void = () => {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.editor !== undefined) {

      const highlightMethod = (this.showLineNumbers) ? withLineNumbers(this.highlightMethod) : this.highlightMethod;

      this.codeJar = CodeJar(this.editor.nativeElement, highlightMethod, {tab: '\t'});
      this.codeJar.onUpdate((newCode: string) => {
        this.code = newCode;
        this.codeChange.emit(newCode);
        this.update.emit(newCode);
      });
      this.updateCode(this.code);
      this.update.emit(this.code);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.code.currentValue && !changes.code.firstChange) {
      this.updateCode(changes.code.currentValue);
    }
  }

  /***
   * updates the code and preserves the position
   * @param newCode new code
   */
  public updateCode(newCode: string) {
    if (this.codeJar) {
      this.codeJar.updateCode(newCode);
    }
  }
}
