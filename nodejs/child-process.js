const { error } = require('console');
const http=require('http')
const cp=require('child_process')

cp.exec('ls -al',(err,stdout,stderr)=>{
    if(err){
        console.error('error')
    }
    console.log(`stdout:${stdout}`)
    console.log(`stderr:${stderr}`)
})


const server=http.createServer((req,res)=>{
    res.end('Bye Bye');
})
server.listen(3000,()=>{
    console.log('listening on port 3000')
})
server.on('error',(error)=>{
    console.log(`${error.message}`)
})
server.on('listening',()=>{
    console.log('listening')
})