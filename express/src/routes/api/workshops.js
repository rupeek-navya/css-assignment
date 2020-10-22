const express=require('express')
const path=require('path')
const {getWorkshops, getWorkshopById} =require('../../controllers/workshops')
const router=express.Router()

router.get('/',getWorkshops)

router.get('/:id',getWorkshopById)

module.exports=router
