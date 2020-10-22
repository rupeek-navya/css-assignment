const workshops=require('../data/workshops.json')
const getWorkshops=(req,res)=>{
    return res.json(workshops)
}
const sendWorkshops=()=>{
    return workshops
}
const getWorkshopById=(req,res)=>{
    id=req.params.id
    workshop=res.json(workshops[id])
    return workshop
}

module.exports={
    getWorkshops,
    sendWorkshops,
    getWorkshopById
}