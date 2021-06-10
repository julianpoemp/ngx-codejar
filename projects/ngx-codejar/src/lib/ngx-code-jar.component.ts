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

  @ViewChild('editor') editor: ElementRef | undefined;
  private codeJar: any;

  constructor() {
    this.update = new EventEmitter<string>();
  }

  @Input() code = '';
  @Output() codeChange = new EventEmitter<string>();

  @Input() highlighter: 'prism' | 'hljs' = 'hljs';
  @Input() highlightMethod: (editor: CodeJarContainer, pos?: Position) => void = () => {
  };

  // Events
  /**
   * is triggered after highlighting
   */
  @Output() update: EventEmitter<string>;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.editor !== undefined) {
      this.codeJar = CodeJar(this.editor.nativeElement, this.highlightMethod, {tab: '\t'});
      this.codeJar.onUpdate((newCode: string) => {
        this.code = newCode;
        this.codeChange.emit(newCode);
        this.update.emit(newCode);
      });
      this.updateCode(this.code);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.code !== undefined) {
      this.code = changes.code.currentValue;
      if (this.codeJar !== undefined) {
        this.updateCode(this.code)
      }
    }
  }

  /***
   * updates the code and preserves the position
   * @param newCode
   */
  public updateCode(newCode: string) {
    const position = this.codeJar.save();
    this.codeJar.updateCode(newCode);
    this.codeJar.restore(position);
  }
}
