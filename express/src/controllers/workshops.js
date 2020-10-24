const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'workshop' );
const workshops=require('../data/workshops.json')

const getWorkshops=(req,res)=>{
    return res.json(workshops)
}

async function sendWorkshops( req, res ,next) {
    try {
        const workshops = await Workshop.find().exec();
        res.json( workshops );
    } catch( error ) {
        error.status=500
        next(error)
    }
}

async function sendWorkshopById(req,res,next){
    id= req.params.id
    try {
        const workshop = await Workshop.findById(id).exec();
        res.json( workshop );
    } catch( error ) {
        error.status=500
        next(error)
    }
    
}

async function addWorkshops(req,res,next){
    const data = req.body;
    let workshops;

    if( data instanceof Object && Object.keys(data).length==0) {
        const error = new Error( 'Workshops data is missing' );
        error.status = 400;
        next( error );
    }

    if( data instanceof Array ) {
        workshops = data;
    } else {
        workshops = [ data ];
    }

    try {
        const updatedWorkshops = await Workshop.insertMany( workshops );

        res.status(201).json( updatedWorkshops );
    } catch( error ) {
        error.status = 500;
        next( error );
    }

}

async function updateWorkshopById(req,res,next){
    const data = req.body;
    const id = req.params.id;

      
    let workshop = data;

    if( data instanceof Object && Object.keys( data ).length === 0 ) {
        const error = new Error( 'Workshops data to be updated is missing' );
        error.status = 400;
        next( error );
    }

    // check if modes is being updated
    const modes = workshop.modes || [];
    delete workshop.modes;

    try {
        const updatedWorkshops = await Workshop.findByIdAndUpdate( id,{$set:workshop,$addToSet:{modes}} );

        res.json( updatedWorkshops );
    } catch( error ) {
        error.status = 500;
        next( error );
    }
}
async function deleteWorkshopById(req,res,next){
    const id=req.params.id
    try{
        const removedWorkshop=await Workshop.findByIdAndRemove(id)
        if(removedWorkshop){
            res.status(204).json({message:'your file is deleted'})
        }
    }
    catch(error){
        error.status=404
        next(error)
    }

}




module.exports={
    getWorkshops,
    sendWorkshops,
    sendWorkshopById,
    addWorkshops,
    updateWorkshopById,
    deleteWorkshopById
}