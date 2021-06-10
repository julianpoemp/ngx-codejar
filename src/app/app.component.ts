import {Component} from '@angular/core';
import hljs from 'highlight.js';
import {CodeJarContainer} from '../../projects/ngx-codejar/src/lib/codejar.typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  tsCode = `import hljs from 'highlight.js';
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


  htmlCode = `<ngx-codejar [highlightMethod]="highlightMethod" [(code)]="code"></ngx-codejar>`;

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
}
