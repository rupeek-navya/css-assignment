const express=require('express')
const indexRouter =require('./routes')
const workshopRouter=require('./routes/workshop')
const app=express()
const port=process.env.PORT || 3000

app.use(indexRouter)
app.use('/workshops',workshopRouter)

app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(`listening on ${port}`)
})