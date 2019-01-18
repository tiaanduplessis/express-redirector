const express = require('express')
const redirector = require('./index')

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