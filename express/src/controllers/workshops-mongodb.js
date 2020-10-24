const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'workshop' );
const workshops=require('../data/workshops.json')

const getWorkshops=(req,res)=>{
    return res.json(workshops)
}

async function sendWorkshops( req, res ) {
    const database = client.db( 'workshops-app' );
    const collection = database.collection( 'workshops' );
    
    const query = {};
    
    try {
        const workshops = await collection.find( query ).toArray();
        res.json( workshops );
    } catch( error ) {
        res.status( 500 ).json({
            message: error.message
        });
    }
}

const getWorkshopById=(req,res)=>{
    id= +req.params.id-1
    workshop=res.json(workshops[id])
    return workshop
}

module.exports={
    getWorkshops,
    sendWorkshops,
    getWorkshopById
}