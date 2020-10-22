const path=require('path')
const fs=require('fs')

const filename=process.argv[2]
const ws=fs.createWriteStream(path.join(__dirname,filename))

for(let i=0;i<10000000;i++){
    ws.write(`Line ${i}\n`)
}
ws.end()