

module.exports = function redirector(app, config) {
    Object.keys(config).forEach(from => {
        const {
            method = 'get',
             to, 
             status = 301
            } = typeof config[from] === 'string' ? {to: config[from]} : config[from]

        app[method.toLowerCase()](from, (_, res) => {
            res.redirect(status, to)
        })
    })
}