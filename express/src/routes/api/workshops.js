const express=require('express')
const path=require('path')
const {sendWorkshops, sendWorkshopById,addWorkshops,updateWorkshopById,deleteWorkshopById} =require('../../controllers/workshops')
const router=express.Router()

router.get('/',sendWorkshops)

router.get('/:id',sendWorkshopById)

router.post('/',addWorkshops)

router.patch('/:id',updateWorkshopById)

router.delete('/:id',deleteWorkshopById)



module.exports=router
