const cors=require('cors')
const express=require('express')
const app=express()
const router=require('./router.js')

const database=require('../MODELS/database')
app.use(cors())
app.use(express.json())

synchronizing()

async function synchronizing()
{
    await database.sync()
}

app.use(router)

app.listen(5000)