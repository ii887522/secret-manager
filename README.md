# secret-manager
[![Semantic Versioning 2.0.0](https://img.shields.io/badge/semver-2.0.0-standard.svg)](https://semver.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-ffff00.svg)](https://www.javascript.com)
[![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-0000e0.svg)](https://www.typescriptlang.org/)
[![Npm package version](https://badgen.net/npm/v/@ii887522/secret-manager)](https://www.npmjs.com/package/@ii887522/secret-manager)
[![Npm package daily downloads](https://badgen.net/npm/dm/@ii887522/secret-manager)](https://npmjs.com/package/@ii887522/secret-manager)
[![Npm package license](https://badgen.net/npm/license/@ii887522/secret-manager)](https://npmjs.com/package/@ii887522/secret-manager)
[![Npm package dependents](https://badgen.net/npm/dependents/@ii887522/secret-manager)](https://npmjs.com/package/@ii887522/secret-manager)

It allows the user to save, copy, read, update and delete a secret for easier management without worrying about forgetting or losing secrets.

## Table of contents
- [Usage](https://github.com/ii887522/secret-manager#usage)
- [Coding Style](https://github.com/ii887522/secret-manager#coding-style)
- [Prerequisites](https://github.com/ii887522/secret-manager#prerequisites)
- [Install dependencies](https://github.com/ii887522/secret-manager#install-dependencies)
- [Lint project](https://github.com/ii887522/secret-manager#lint-project)
- [Automatically build project on save](https://github.com/ii887522/secret-manager#automatically-build-project-on-save)
- [Start project](https://github.com/ii887522/secret-manager#start-project)
- [Test project with code coverage analysis](https://github.com/ii887522/secret-manager#test-project-with-code-coverage-analysis)
- [Automatically test project with code coverage analysis on change](https://github.com/ii887522/secret-manager#Automatically-test-project-with-code-coverage-analysis-on-change)
- [Deploy project](https://github.com/ii887522/secret-manager#deploy-project)

## Usage
```sh
secret-manager
```

## Coding style
This project follows [Javascript Standard Style](https://standardjs.com/). Please familiarize yourself with the rules provided in the coding style and
make sure all the proposed code changes in your commits are conforming to the style before making a merge request. You can also make use of
StandardJS - Javascript Standard Style which is a [Visual Studio Code](https://code.visualstudio.com/) plugin and `npm run lint` command under the
[Lint the project](https://github.com/ii887522/secret-manager#lint-the-project) section to support you.

## Prerequisites
- Windows 11 or Linux
- [Visual Studio Code](https://code.visualstudio.com/) with plugins:
  - EditorConfig for VS Code
  - Markdown All in One
  - StandardJS - Javascript Standard Style
  - YAML
- [Node.js 16.13.2](https://nodejs.org/en/) and later

## Install dependencies
```sh
npm install
```

## Lint the project
```sh
npm run lint
```

## Build the project
```sh
npm run build
```

## Automatically build the project on save
```sh
npm run build:watch
```

## Start the project
```sh
npm start
```
