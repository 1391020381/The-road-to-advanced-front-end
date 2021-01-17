const net = require('net')
const client = net.createConnection({
    port:8124
},()=>{
    console.log('已经连接到服务器')
    client.write('你好世界!\r\n')
})
client.on('data',(data)=>{
    console.log(data.toString())
    client.end()
})
client.on('end',()=>{
    console.log('已经从服务器断开')
})