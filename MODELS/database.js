const Sequelize=require('sequelize')

const sequelize=new Sequelize('gps_coords','root','Is18071995$',{host:'localhost',dialect:'mysql'})

module.exports=sequelize