# ngx-codejar <a href="https://www.npmjs.com/package/ngx-codejar"><img alt="npm" src="https://img.shields.io/npm/v/ngx-codejar"></a>

This is an Angular wrapper for the code-editor [CodeJar](https://github.com/antonmedv/codejar) by Anton Medvedev. It
allows to easily use CodeJar in Angular projects.

<!--suppress HtmlDeprecatedAttribute -->
<div align="center" style="max-width:100%;">
<img src="https://raw.githubusercontent.com/julianpoemp/ngx-codejar/main/screenshots/thumbnail.png" alt="thumbnail">
</div>

## Demo

Visit the demo page: https://julianpoemp.github.io/ngx-codejar/

## About CodeJar

CodeJar is an embeddable javascript code-editor that supports different highlighter like Highlight.js or PrimsJs.
According to the [main project](https://github.com/antonmedv/codejar) it has the following features:

- Preserves indentation on a new line
- Adds closing brackets, quotes
- Indents line with the Tab key
- Supports undo/redo

## Compatibility

<table>
<thead>
<tr>
  <th>NgxCodeJar</th>
  <th>CodeJar</th>
  <th>Angular</th>
  <th>Readme</th>
</tr>
</thead>
<tbody>
<tr>
<td>7.x</td>
<td>4.x</td>
<td> &gt;= 16</td>
<td>
  <a href="https://github.com/julianpoemp/ngx-codejar/blob/main/README.md">README</a>
</td>
</tr>
<tr>
<td>6.x</td>
<td>4.x</td>
<td>15.x</td>
<td>
  <a href="https://github.com/julianpoemp/ngx-codejar/blob/v6.x/README.md">README</a>
</td>
</tr>
</tbody>
</table>

## Overview

- [Install ngx-codejar with highlight.js](https://github.com/julianpoemp/ngx-codejar#how-to-use-codejar-with-angular-and-highlightjs)
- [Install ngx-codejar with prism.js](https://github.com/julianpoemp/ngx-codejar#how-to-use-codejar-with-angular-and-prismjs)
- [Options](https://github.com/julianpoemp/ngx-codejar#properties--events)
- [Development](https://github.com/julianpoemp/ngx-codejar#development)
- [Contribution](https://github.com/julianpoemp/ngx-codejar#development)
- [Troubleshooting](https://github.com/julianpoemp/ngx-codejar#development)

## Installation

### How to use CodeJar with Angular and highlight.js

If you want to use CodeJar with [highlight.js](https://highlightjs.org/) you should do the following steps:

1. Install highlight.js, CodeJar, codejar-linenumbers and ngx-codejar:

  ````
  npm install --save codejar codejar-linenumbers highlight.js ngx-codejar && npm install --save-dev @types/highlight.js
  ````

2. Import NgxCodeJarComponent `NgxCodeJarComponent` to your app's ngModule import property (standalone!):

````typescript
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...,
    NgxCodeJarComponent
  ],
  // ...
})
````

3. Select themes from `node_modules/highlight.js/styles` and add them to the styles section of your `angular.json`.
4. Add `node_modules/codejar-linenumbers/es/codejar-linenumbers.css` to the styles section of your `angular.json`
5. Now see https://julianpoemp.github.io/ngx-codejar/ on how to use it.

### How to use CodeJar with Angular and Prism.js

If you want to use codejar with [prism.js](https://prismjs.com/) you should do the following steps:

1. Install prism.js, codejar, codejar-linenumbers and ngx-codejar:

  ````
  npm install --save codejar codejar-linenumbers prismjs ngx-codejar && npm install --save-dev @types/prismjs
  ````

2. Import module `NgxCodeJarComponent` to your app's ngModule imports property (!standalone):

````typescript
@NgModule({
    declarations: [
        // ...
    ],
    imports: [
        // ...,
        NgxCodeJarComponent
    ],
    // ...
})
````

3. Select themes from `node_modules/prismjs/themes` and add them to the styles section of your `angular.json`.
4. Add `node_modules/codejar-linenumbers/es/codejar-linenumbers.css` to the styles section of your `angular.json`
5. Now see https://julianpoemp.github.io/ngx-codejar/ on how to use it.

### Properties & Events

<table style="width:100%;">
<thead>
<tr>
<th>Type</th>
<th>Name</th>
<th>Description</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>Property</td>
<td>code</td>
<td>property for two-way data-binding.</td>
<td>-</td>
</tr>
<tr>
<td>Property</td>
<td>highlighter</td>
<td>selects which highlighter should be used ('prism' or 'hljs')</td>
<td>'hljs'</td>
</tr>
<tr>
<td>Property</td>
<td>options</td>
<td>Options provided by CodeJar + additional Options (tabSize)</td>
<td>Defaults provided by Codejar <a href="https://github.com/antonmedv/codejar">Defaults by CodeJar</a></td>
</tr>
<tr>
<td>Property</td>
<td>showLineNumbers</td>
<td>adds line numbers</td>
<td>false</td>
</tr>
<tr>
<td>Property</td>
<td>highlightMethod</td>
<td>set a method for code highlight</td>
<td><code>(editor: CodeJarContainer) => {}</code></td>
</tr>
<tr>
<td>Property</td>
<td>readonly</td>
<td>defines if user is allowed to make code changes</td>
<td>false</td>
</tr>
<tr>
<td>Event</td>
<td>update</td>
<td>this event is triggered after the code was updated.</td>
<td>-</td>
</tr>
</tbody>
</table>

## Development

Call `npm start` to start the demo locally. Build the library using `ng build ngx-codejar`.

## Contribution

Feel free to create pull requests or issues with suggestions! :)

## Troubleshooting

This package is just a wrapper for CodeJar. If you have any problems using it please make sure, that the problem is
related to this wrapper.

