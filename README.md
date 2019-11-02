<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h3 align="center" style="margin: 30px 0 35px;">Mobile UI Components built on Vue</h3>


[![Build Status](https://badgen.net/travis/FEMessage/vant/master)](https://travis-ci.com/FEMessage/vant)
[![NPM Download](https://badgen.net/npm/dm/@femessage/vant)](https://www.npmjs.com/package/@femessage/vant)
[![NPM Version](https://badgen.net/npm/v/@femessage/vant)](https://www.npmjs.com/package/@femessage/vant)
[![NPM License](https://badgen.net/npm/license/@femessage/vant)](https://github.com/FEMessage/vant/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/vant/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

---

## Features

* 60+ Reusable components
* 95% Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support Custom Theme
* Support i18n
* Support TS
* Support SSR

## Install

```bash
# Using npm
npm i @femessage/vant -S

# Using yarn
yarn add @femessage/vant
```

## Quickstart

```js
import Vue from 'vue';
import { Button } from '@femessage/vant';
import '@femessage/vant/lib/index.css';

Vue.use(Button);
```

See more in [Quickstart](https://femessage.github.io/vant#/en-US/quickstart).

## Development

```sh
# local dev and preview site
yarn dev

# using eslint to check code style
yarn lint

# run unit test
yarn test

# build lib
yarn build:lib

# build site
yarn build:site

# publish lib to npm
yarn release

# publish site to github pages
yarn release:site
```

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 7+.

## Links

* [Documentation](https://femessage.github.io/vant)
* [Changelog](https://github.com/FEMessage/vant/releases)

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
