const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        "sn-log": "./src/index.js",
        "sn-log.min": "./src/index.js"
    },
    output: {
        filename: "[name].js", //打包的文件名
        library: 'log',  //打包出来的方法名
        libraryTarget: "umd",   //打包的规范
        libraryExport: "default", //打包出来库默认导出的值  默认导出module
    }, 
    mode: "none",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.min.js$/,
        })]
    }
}