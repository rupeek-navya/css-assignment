const http=require('http')
const path=require('path')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    filename='heel.txt'
    var url=req.url
    var arr=url.split('/')
    if(arr[1]!='favicon.ico'){
        var op1=parseInt(arr[2])
        var op2=parseInt(arr[3])
    }
    if(arr[1]=='add'){
        var result=op1+op2
        content=`${arr[1]} ${op1} ${op2} ${result}\n`
        fs.appendFile(path.join(__dirname,filename),content,'utf8',(err)=>{
            if(err){
                throw err;
            }
            res.write('succesful\n')
            res.end(`${result}`)
        })
    }
    if(arr[1]=='multiply'){
        var result=op1*op2
        content=`${arr[1]} ${op1} ${op2} ${result}\n`
        fs.appendFile(path.join(__dirname,filename),content,'utf8',(err)=>{
            if(err){
                throw err;
            }
            res.end('succesful\n')
            res.end(`${result}`)
        })
    }
})
server.listen(3000)