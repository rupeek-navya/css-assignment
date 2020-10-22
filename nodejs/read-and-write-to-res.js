const path=require('path')
const fs=require('fs')
const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url!=='/favicon.ico' && req.url!=='/')
        var filename1=req.url
    const dest='file1.js'
    const rs=fs.createReadStream(path.join(__dirname,filename1))
    const ws=fs.createWriteStream(path.join(__dirname,dest))
    // rs.pipe(ws)
    rs.on('data',(chunk)=>{
        res.write(chunk)
    })
    rs.on('end',()=>{
        res.end()
    })
})
server.listen(8000)




// const dest=process.argv[2]
// const ws=fs.createWriteStream(path.join(__dirname,dest))

// const filename=process.argv[2]
// const rs=fs.createReadStream(path.join(__dirname,filename))

// rs.on('data',(chunk)=>{
//     process.stdout.write(chunk)
// })
// rs.on('end',()=>{
//     console.log('ended')
// })

