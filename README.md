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

## Installation

### How to use CodeJar with Angular and highlight.js

If you want to use CodeJar with [highlight.js](https://highlightjs.org/) you should do the following steps:

1. Install highlight.js, CodeJar and ngx-codejar (**Important: you have to install CodeJar v3.4.0**):

  ````
  npm install --save codejar@3.4.0 highlight.js ngx-codejar && npm install --save-dev @types/highlight.js
  ````

2. Import module `NgxCodejarModule` to your app's ngModule:

````typescript
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...,
    NgxCodejarModule
  ],
  // ...
})
````

3. Select themes from `node_modules/highlight.js/styles` and add them to the styles section of your `angular.json`.

4. Now see https://julianpoemp.github.io/ngx-codejar/ on how to use it.

### How to use CodeJar with Angular and Prism.js

If you want to use codejar with [prism.js](https://prismjs.com/) you should do the following steps:

1. Install prism.js, codejar and ngx-codejar (**Important: you have to install CodeJar v3.4.0**): 

  ````
  npm install --save codejar@3.4.0 prismjs ngx-codejar && npm install --save-dev @types/prismjs
  ````

2. Import module `NgxCodejarModule` to your app's ngModule:

````typescript
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...,
    NgxCodejarModule
  ],
  // ...
})
````

3. Select themes from `node_modules/prismjs/themes` and add them to the styles section of your `angular.json`.

4. Now see https://julianpoemp.github.io/ngx-codejar/ on how to use it.

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
<td>highlighter</td>
<td>selects which highlighter should be used ('prism' or 'hljs')</td>
<td>'hljs'</td>
</tr>
<tr>
<td>Property</td>
<td>showLineNumbers</td>
<td>adds line numbers</td>
<td>false</td>
</tr>
<tr>
<td>Property</td>
<td>code</td>
<td>property for two-way data-binding.</td>
<td>-</td>
</tr>
<tr>
<td>Property</td>
<td>highlightMethod</td>
<td>set a method for code highlight</td>
<td><code>(editor: CodeJarContainer) => {}</code></td>
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

