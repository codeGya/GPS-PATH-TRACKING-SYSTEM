const gpscoords=require('../MODELS/gpscoords.js')

exports.saveDataToDatabase=async (req,res,next)=>{
    const latitude=req.body.latitude
    const longitude=req.body.longitude
    const timeat=req.body.particularTime


    const waitForStoringData=await gpscoords.create({latitude:latitude,longitude:longitude,timeat:timeat})
    res.send({})
}