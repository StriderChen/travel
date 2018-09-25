const path = require('path');
const proxy = require('http-proxy-middleware');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('common', resolve('src/common'))
            .set('base', resolve('src/store'))
            .set('view', resolve('src/view'))
            .set('style', resolve('src/assets/style'))
    },
    devServer: {
        //设置主机地址
        host: '0.0.0.0',
        port: 8848,
        //设置代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8848',
                changeOrigin: true,
                pathRewrite: {
                    //请求本地静态资源文件,路径中不要带有/public
                    '^/api': '/mock'
                }
            }
        }
    }
}
