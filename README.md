
# express-redirector
[![package version](https://img.shields.io/npm/v/express-redirector.svg?style=flat-square)](https://npmjs.org/package/express-redirector)
[![package downloads](https://img.shields.io/npm/dm/express-redirector.svg?style=flat-square)](https://npmjs.org/package/express-redirector)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/express-redirector.svg?style=flat-square)](https://npmjs.org/package/express-redirector)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Easily configure redirects with Express

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install express-redirector
$ # OR
$ yarn add express-redirector
```

## Usage

```js
const express = require('express')
const redirector = require('redirector')

const app = express()

app.get('/foo', (req, res) => {
    res.status(200).send({Hi: true})
})

redirector(app, {
    '/': '/foo',
    '/bar': {
        to: '/foo',
        method: 'post',
        status: 404
    }
})

app.listen(3000)
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    