module.exports = {
    // dev: {//dev指的是开发环境
        devServer: { //4.0写法
            proxy: { //【这个功能是由 webpack-dev-server】
                '/api': { //当在请求/api这个目录的时候
                    target: 'http://localhost:8080', //将请求转发到当前8080这个端口
                    changeOrigin: true, //是否跨域
                    pathRewrite: { //将路径做个替换
                        '^/api': '/mock'  //一旦请求的地址是/api开头，那么就把他替换请求到本地的 /mock 目录的文件夹下
                    }
                }
            }
        }
    // }, 
    
}