const http=require('http')
const path=require('path')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url=='/package.json'){
    filename=path.join(__dirname,req.url)
    fs.readFile(filename,'utf-8',(err,content)=>{
        if(err){
            console.log(err.message)
            return;
        }
        res.end(content)
    })
}
})
server.listen(3000,()=>{
    console.log('listening on port 3000')
})