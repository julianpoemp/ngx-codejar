## [6.1.3](https://github.com/julianpoemp/ngx-codejar/compare/v6.1.2...v6.1.3) (2024-03-08)


### Bug Fixes

* **ngx-codejar:** removed linebreaks/tabs after enter key pressed ref [#3](https://github.com/julianpoemp/ngx-codejar/issues/3) ([41c2576](https://github.com/julianpoemp/ngx-codejar/commit/41c2576e6651ece088f617b599cc6914b013bc99))

Please update your CodeJar dependency to ^v4.2.0.

## [6.1.2](https://github.com/julianpoemp/ngx-codejar/compare/v6.1.1...v6.1.2) (2024-02-24)


### Bug Fixes

* **ngx-codejar:** turning off readonly not working on FIrefox ([d47c716](https://github.com/julianpoemp/ngx-codejar/commit/d47c7169aea0e4153898ee167e034607f7a9d78b))


## [6.1.1](https://github.com/julianpoemp/ngx-codejar/compare/v6.1.0...v6.1.1) (2023-12-12)


### Bug Fixes

* **ngx-codejar:** cannot set style of undefined ([f8facb7](https://github.com/julianpoemp/ngx-codejar/commit/f8facb75e1a3a251040fb94290d5c682af19b44d))

# [6.1.0](https://github.com/julianpoemp/ngx-codejar/compare/v6.0.0...v6.1.0) (2023-11-21)


### Features

* **ngx-codejar:** readonly property ([d908e52](https://github.com/julianpoemp/ngx-codejar/commit/d908e52a994b45dd431ee53f34a6b8a0815e9269))

# [6.0.0](https://github.com/julianpoemp/ngx-codejar/compare/v5.2.0...v6.0.0) (2023-07-31)


### Bug Fixes

* **ngx-codejar:** line numbers not working with CodeJar >= 4 ([aef65c3](https://github.com/julianpoemp/ngx-codejar/commit/aef65c3ea8c5814188cbf3a88486fadada81d0ce)), closes [#2](https://github.com/julianpoemp/ngx-codejar/issues/2)


### BREAKING CHANGES

- Linenumbers feature was dropped in main CodeJar repository since v4.
  You
  have to install package codejar-linenumbers instead. <b>! changed installation instructions ! </b>
- minimum
  CodeJar version is 4 about now.


# [5.2.0](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.6...v5.2.0) (2023-07-07)


### Features

* **ngx-codejar:** add all API functions provided by CodeJar ([3a5b29f](https://github.com/julianpoemp/ngx-codejar/commit/3a5b29fd7f9826fd24429c492c21604d3d90d786))
* **ngx-codejar:** add options provided by CodeJar ([03379ac](https://github.com/julianpoemp/ngx-codejar/commit/03379acf728d61e8303ff60476a06b2b23ced714))
* **ngx-codejar:** introducing standalone component ([e82f9fd](https://github.com/julianpoemp/ngx-codejar/commit/e82f9fd1b59745771e8405ea31fe7ecf96b0366e))


### BREAKING CHANGES

* **ngx-codejar:** NgxCodeJarComponent is now a standalone component. Have
  a look on the README for more information

## [5.1.6](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.5...v5.1.6) (2023-06-26)


### Features

* **editor:** support for setting height and flex to ngx-codejar ([8653204](https://github.com/julianpoemp/ngx-codejar/commit/8653204a175dc95d7aeb0c3369b556ea234676d9))

## [5.1.5](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.4...v5.1.5) (2023-05-12)

* README and github page updates.

**! NOTICE:** If exists, remove julianpoemp/codejar-fixed-redo-undo and use >= codejar@3.7.0 . The undo/redo issue is
now fixed in the official package.

## [5.1.4](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.3...v5.1.4) (2023-02-28)

### Bug Fixes

* **npm:** codejar fixes redo/undo issue since
  3.7.0 ([a8bc8cc](https://github.com/julianpoemp/ngx-codejar/commit/a8bc8ccc7140acdf282b77d0852852916ca17f7e))

## [5.1.3](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.2...v5.1.3) (2023-02-12)

### Bug Fixes

* **ngx-codejar:** redo/undo not working
  ref [#1](https://github.com/julianpoemp/ngx-codejar/issues/1) ([c3df763](https://github.com/julianpoemp/ngx-codejar/commit/c3df7630c0f5628528ad3407da53b4030dac5b47))

## [5.1.2](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.1...v5.1.2) (2022-07-16)

**codejar:** fixed losing selection in editor on data binding

## [5.1.1](https://github.com/julianpoemp/ngx-codejar/compare/v5.1.0...v5.1.1) (2022-07-16)

### Bugfixes

* **codejar:** fixed issue with data binding not working

## [5.1.0](https://github.com/julianpoemp/ngx-codejar/compare/v5.0.1...v5.1.0) (2022-07-16)

### Enhancements

* **codejar:** fixed issue with selection on some browsers

## [5.0.1](https://github.com/julianpoemp/ngx-codejar/compare/v5.0.0...v5.0.1) (2022-07-16)

## [5.0.0](https://github.com/julianpoemp/ngx-codejar/compare/v1.0.2...v5.0.0) (2022-06-10)

### Enhancements

* **codejar:** updated codejar to 3.6.0
* **angular:** updated angular to 14.0.1

## [1.0.2](https://github.com/julianpoemp/ngx-codejar/compare/v1.0.1...v1.0.2) (2021-06-12)

### Features

* **ngx-codejar:** added support for line
  numbers ([c4311c2](https://github.com/julianpoemp/ngx-codejar/commit/c4311c23397f042e1d347cc63c6a32a9dc9fb2cf))
