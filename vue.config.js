module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                },
                changeOrigin: true
            }
        }
    }
}
