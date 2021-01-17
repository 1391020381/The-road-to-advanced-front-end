const net = require('net')
const server = net.createServer(c=>{
    console.log('客户端已经连接')
    c.on('end',()=>{
        console.log('客户端已经断开连接')
    })
    c.write('你好\r\n')
    c.pipe(c)
})
server.on('error',err=>{
    throw err
})
server.listen(8124,()=>{
    console.log('服务器已经启动')
})