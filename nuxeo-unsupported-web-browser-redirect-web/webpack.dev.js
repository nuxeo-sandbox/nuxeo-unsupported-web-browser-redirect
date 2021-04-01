const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const HttpsProxyAgent = require('https-proxy-agent');
const proxyServer = process.env.HTTPS_PROXY;

console.log("web proxy: " + proxyServer);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        hot: true,
        publicPath: '/dist',
        proxy: {
            '/nuxeo': {
                target: process.env.DEV_SERVER_URL,
                logLevel: "debug",
                ws: true,
                changeOrigin: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                agent: proxyServer ? new HttpsProxyAgent(proxyServer) : undefined
            }
        }
    }
});
