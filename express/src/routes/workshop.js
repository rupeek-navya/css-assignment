const express=require('express')
const path=require('path')
const router=express.Router()
const {sendWorkshops}=require('../controllers/workshops')

router.get( '/', ( req, res ) => {
    let workshops, error;

    try {
        workshops = sendWorkshops();
    } catch( err ) {
        error = err;
    }

    res.render( 'workshops', {
        error,
        workshops
    });
});

router.get( '/:id', ( req, res) => {
    const workshopId= +req.params.id;
    let workshops, error;
    try {
        workshops = sendWorkshops();
    } catch( err ) {
        error = err;
    }
    workshop=workshops[workshopId-1]
    res.render('workshopDetail',{
        error,
        workshop
    })
});
module.exports=router


