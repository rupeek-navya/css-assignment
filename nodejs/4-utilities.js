const fs=require('fs')

const getValue=function(filename,item){
    const data=require(filename)
    if(item in data){
        return data[item]
    }
    return null
}

const setValue=function(filename,key,newValue){
    const data=require(filename)
    if(key in data){
        data[key]=newValue
        fs.writeFile(filename,JSON.stringify(data),'utf8',(err)=>{
            if(err){
                console.log(err.message)
                return
            }
        })
       return data[key] 
    }
    return null
}

module.exports={
    getValue,
    setValue
}



