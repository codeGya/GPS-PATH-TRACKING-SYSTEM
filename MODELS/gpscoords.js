const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const gpstable=sequelize.define('gpstable',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    latitude:
    {
        type:Sequelize.STRING,
        allowNull:false

    },
    longitude:
    {
        type:Sequelize.STRING,
        allowNull:false

    },
    timeat:
    {
        type:Sequelize.STRING
    }
    
    
})

module.exports=gpstable