

const net = require('net');

class Request{
    constructor(options){
        this.method = options.method || 'GET'
        this.host = options.host;
        this.port = options.port || 80
        this.body = options.body || {}
        this.path = options.path || '/'
        this.headers = options.headers || {}
        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"] = "application/x-www-form-urlencoded"
        }
        if(this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key=>`${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }else if(this.headers["Content-Type"]=== "application/json"){
            this.bodyText = JSON.stringify(this.body)
        }
        this.headers["Content-Length"] = this.bodyText.length
    }
    toString(){
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\n
${this.bodyText}`
    }
    open(method,url){

    }
    send(connection){
        return new Promise((resolve,reject)=>{
            if(connection){
                connection.write(this.toString())
            }else{
                console.log('createConnection:',this.host,this.port)
                connection = net.createConnection({
                    host:this.host,
                    port:this.port
                },()=>{
                    console.log('connection.write:')
                    console.log(this.toString())
                    connection.write(this.toString())
                })
            }
            connection.on('data',data=>{
                console.log('connection:',data.toString())
                resolve(data.toString())
                connection.end()
            })
            connection.on('error',err=>{
                reject(err)
                connection.end()
            })

        })
    }
}
class Response{

}

class ResponseParser{
    constructor(){
        this.WAITING_STATUS_LINE = 0;
        this.WAITING_STATUS_LINE_END = 0;
        this.WAITING_HEADER_NAME = 2;
        this.WAITING_HEADER_VALUE = 3;
        this.WAITING_HEADER_LINE_END = 4;
        this.WAITING_HEADER_BLOCK_END = 5;
        this.current = this.WAITING_STATUS_LINE;
        this.statusLine = "";
        this.headers = {};
        this.headerName = ""
        this.headerValue = ""
    }
    receive(string){
        for(let i = 0;i<string.length;i++){
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char){
        if(this.current === WAITING_STATUS_LINE){

        }
    }

}
class TrunkedBodyParser{

}

void async function(){
    let request = new Request({
        method:'POST',
        host:'127.0.0.1',
        port:"8088",
        path:"/",
        body:{
            name:"winter"
        }
    })
    let response = await request.send();
    console.log("response:")
    console.log(response)
}();

