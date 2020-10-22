const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('workshops home')
})
router.get('/:id',(req,res)=>{
    res.send('workshop details')
})
module.exports=router


