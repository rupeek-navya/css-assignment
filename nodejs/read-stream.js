const path=require('path')
const fs=require('fs')

const filename=process.argv[2]
const rs=fs.createReadStream(path.join(__dirname,filename))

rs.on('data',(chunk)=>{
    process.stdout.write(chunk)
})
rs.on('end',()=>{
    console.log('ended')
})

