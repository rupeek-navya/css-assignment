const http=require('http')
const path=require('path')
const fs=require('fs')

try{
    file=process.argv[2]
    fs.writeFileSync(path.join(__dirname,file),'its a sync type','utf8')
}catch(err){
    console.error(err.message)
}
