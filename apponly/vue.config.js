const { name } = require('./package.json');

module.exports = {

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: '9000'
    },
    configureWebpack: {
        output: {
          // 把子应用打包成 umd 库格式
          filename: '[name].js',
          library: `${name}-[name]`,
          libraryTarget: 'umd',
          jsonpFunction: `webpackJsonp_${name}`
        },
    }
}