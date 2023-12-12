import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {CodeJar, Position} from 'codejar';
import {CodeJarContainer, CodeJarOptions} from './codejar.typings';
import {withLineNumbers} from 'codejar-linenumbers';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
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
export class NgxCodeJarComponent implements AfterViewInit, OnChanges, OnDestroy {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.update = new EventEmitter<string>();
  }

  @ViewChild('editor') editor?: ElementRef;
  @ViewChild('wrapper') wrapper?: ElementRef;

  private codeJar?: CodeJar;
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
  @Input() options: CodeJarOptions = {};
  @Input() readonly = false;

  // Events
  /**
   * is triggered after highlighting
   */
  @Output() update: EventEmitter<string>;
  @Input() highlightMethod: (editor: CodeJarContainer, pos?: Position) => void = () => {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']?.currentValue && changes['options'].currentValue !== changes['options']) {
      if (this.codeJar) {
        this.codeJar.updateOptions(changes['options']?.currentValue);
        this.applyAdditionalOptions();
        this.checkReadonly();
      }
    }

    if (changes['readonly']) {
      this.checkReadonly();
    }
  }

  private checkReadonly() {
    if (this.editor?.nativeElement) {
      if (this.readonly) {
        this.renderer.setAttribute(this.editor?.nativeElement, 'contenteditable', 'none');
      } else {
        this.renderer.setAttribute(this.editor?.nativeElement, 'contenteditable', 'plaintext-only');
      }
    }
  }

  ngAfterViewInit() {
    this.init();
  }

  private init() {
    if (this.editor !== undefined) {
      const highlightMethod = (this.showLineNumbers) ? withLineNumbers(this.highlightMethod) : this.highlightMethod;

      this.codeJar = CodeJar(this.editor.nativeElement, highlightMethod, this.options);
      this.applyCustomizations();
      this.applyAdditionalOptions();

      this.codeJar.onUpdate((newCode: string) => {
        this._code = newCode;
        this.codeChange.emit(newCode);
        this.update.emit(newCode);
      });
      this.updateCode(this._code);
      this.update.emit(this._code);
      this.editor.nativeElement.addEventListener('keydown', this.onKeyDown);
      this.checkReadonly();
    }
  }

  applyAdditionalOptions() {
    if (this.editor) {
      if (this.options.tabSize) {
        this.renderer.setStyle(this.editor.nativeElement, 'tab-size', this.options.tabSize);
      }
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

  /***
   * updates the options.
   * @param options new options
   */
  public updateOptions(options: CodeJarOptions) {
    if (this.codeJar) {
      this.options = options;
      this.codeJar.updateOptions(options);
    }
  }

  /***
   * saves current cursor position.
   */
  public save(): Position | undefined {
    if (this.codeJar) {
      return this.codeJar.save();
    }
    return undefined;
  }

  /***
   * restore cursor position.
   * @param pos cursor position
   */
  public restore(pos: Position): void {
    if (this.codeJar) {
      this.codeJar.restore(pos);
    }
  }

  /***
   * saves current editor state to history.
   */
  public recordHistory(pos: Position): void {
    if (this.codeJar) {
      this.codeJar.recordHistory();
    }
  }

  /***
   * removes all event listeners. It's automatically called when component is destroyed.
   */
  public destroy(): void {
    if (this.codeJar) {
      this.codeJar.destroy();
    }
  }

  ngOnDestroy() {
    this.destroy();
  }

  private applyCustomizations() {
    if (this.wrapper && this.editor && this.el?.nativeElement) {
      const codejarWrap = (this.wrapper.nativeElement as HTMLElement).firstElementChild;
      const lineNumbers = this.el.nativeElement.getElementsByClassName('codejar-linenumbers')[0];

      if (codejarWrap) {
        this.renderer.setStyle(codejarWrap, 'height', '100%');
      }

      if (lineNumbers) {
        if (this.el.nativeElement.style?.height) {
          this.renderer.setStyle(lineNumbers, 'height', '100%');
        }
      }
    }
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (this.readonly) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}
