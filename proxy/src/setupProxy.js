const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{   // 遇见 /api1开头的请求就走 下面的代理
            target:'http://localhost:5000', // 代理将请求转发给谁
            changeOrigin:true,
            pathRewrite:{'^/api1':''} // 将前缀去掉
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}