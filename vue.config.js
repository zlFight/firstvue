module.exports = {
    publicPath: '/hzxw/',
    outputDir: 'hzxw', // 打包的目录
    assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录  默认为‘’没有单独目录js/css/img在根目录中
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8089, // 服务端口
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    }
}