# ngx-codejar

This is an Angular wrapper for the code-editor [CodeJar](https://github.com/antonmedv/codejar) by Anton Medvedev. It
allows to easily use CodeJar in Angular projects.

## Demo

Visit the demo page:

## About CodeJar

According to the [main project](https://github.com/antonmedv/codejar) it has the following features:

- Preserves indentation on a new line
- Adds closing brackets, quotes
- Indents line with the Tab key
- Supports undo/redo

## Installation

### Using CodeJar with highlight.js

If you want to use codejar with highlight.js you should do the following steps:

1. Install highlight.js, codejar and ngx-codejar:

  ````
  npm install --save codejar highlight.js ngx-codejar && npm install --save-dev @types/highlight.js
  ````

2. Import module `NgxCodeJarModule` to your app's ngModule:

````typescript
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    NgxCodejarModule
  ],
  // ...
})
````

3. Now see URL on how to use it.

## Development

Call `npm start` to start the demo locally. Build the library using `ng build ngx-codejar`.

## Contribution

Feel free to create pull requests or issues with suggestions! :)

## Troubleshooting

This package is just an wrapper for CodeJar. If you have any problems using it please make sure, that the problem is
related to this wrapper.

