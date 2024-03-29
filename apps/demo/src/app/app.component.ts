import {Component} from '@angular/core';
import hljs from 'highlight.js';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import {CodeJarContainer, NgxCodeJarComponent} from 'ngx-codejar';

@Component({
  standalone: true,
  imports: [NgxCodeJarComponent],
  selector: 'ngx-codejar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  hljsTSCode = `import hljs from 'highlight.js';
import {CodeJarContainer} from 'ngx-codejar';

export class MyComponent {
  code = "";
  // ...

  highlightMethod(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = hljs.highlight(editor.textContent, {
        language: 'typescript'
      }).value;
    }
  }
}
  `;


  hljsHTMLCode = `<ngx-codejar [highlightMethod]="highlightMethod" [(code)]="code" [showLineNumbers]="true"></ngx-codejar>`;
  prismHTMLCode = `<ngx-codejar [highlightMethod]="highlightMethod" [(code)]="code" [highlighter]="'prism'" [showLineNumbers]="true"></ngx-codejar>`;

  prismTSCode = `import * as Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import {CodeJarContainer} from '../../projects/ngx-codejar/src/lib/codejar.typings';

export class MyComponent {
  code = "";
  // ...

  hightlightMethod(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = Prism.highlight(editor.textContent, Prism.languages.typescript, 'typescript');
    }
  }
}
  `;

  highlightWithTS(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = hljs.highlight(editor.textContent, {
        language: 'typescript'
      }).value;
    }
  }

  highlightWithHTML(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = hljs.highlight(editor.textContent, {
        language: 'html'
      }).value;
    }
  }

  hightlightTSWithPrismJS(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = Prism.highlight(editor.textContent, Prism.languages['typescript'], 'typescript');
    }
  }


  hightlightHTMLWithPrismJS(editor: CodeJarContainer) {
    if (editor.textContent !== null && editor.textContent !== undefined) {
      editor.innerHTML = Prism.highlight(editor.textContent, Prism.languages['html'], 'html');
    }
  }
}
