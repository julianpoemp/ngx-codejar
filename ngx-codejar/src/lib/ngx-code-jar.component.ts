import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {CodeJar, Position} from 'codejar';
import {CodeJarContainer} from './codejar.typings';
import {withLineNumbers} from 'codejar/linenumbers.js';

@Component({
  selector: 'ngx-codejar',
  template: `
    <div class="ngx-codejar-wrap ngx-codejar-flex" #wrapper>
        <pre #editor class="editor" [ngClass]="{
                'hljs': highlighter === 'hljs',
                'language-typescript': highlighter === 'prism',
                'ngx-codejar-editor': highlighter !== undefined
             }" style="padding-bottom:0px;">
        </pre>
    </div>`,
  styles: [`
    :host {
      display: block;
    }

    .ngx-codejar-editor {
      border-radius: 6px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      font-family: "Source Code Pro", monospace;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 20px;
      padding: 10px;
      tab-size: 4;
      margin: 0;
      height: 100%;
    }

    .ngx-codejar-wrap {
      height: 100%;
    }

    .ngx-codejar-flex {
      display: flex !important;
      flex-direction: column !important;
      flex: auto !important;
      height: 100% !important;
    }
  `]
})
export class NgxCodeJarComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.update = new EventEmitter<string>();
  }

  @ViewChild('editor') editor?: ElementRef;
  @ViewChild('wrapper') wrapper?: ElementRef;

  private codeJar: CodeJar;
  private _code = '';

  public height?: number = undefined;

  @Input() set code(value: string) {
    if (this._code !== value) {
      this._code = value;
      this.updateCode(value);
    }
  }

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
      this.applyCustomizations();
      this.codeJar.onUpdate((newCode: string) => {
        this._code = newCode;
        this.codeChange.emit(newCode);
        this.update.emit(newCode);
      });
      this.updateCode(this._code);
      this.update.emit(this._code);
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

  private applyCustomizations() {
    if (this.wrapper && this.editor) {
      const codejarWrap = (this.wrapper.nativeElement as HTMLElement).firstElementChild;
      const lineNumbers = this.el.nativeElement.getElementsByClassName('codejar-linenumbers')[0];

      this.renderer.setStyle(codejarWrap, 'height', '100%');

      if (this.el.nativeElement.style.height !== '') {
        this.renderer.setStyle(lineNumbers, 'height', '100%');
      }
    }
  }
}
