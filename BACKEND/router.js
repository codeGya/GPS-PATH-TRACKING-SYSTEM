const express=require('express')
//console.log(module,'module')
const router=express.Router()
const controller=require('./controller.js')

router.post('/save/coord/daily',controller.saveDataToDatabase)

module.exports=router

