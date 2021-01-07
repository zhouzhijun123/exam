
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db')
const Userinfo=require('./userinfo')


var Invigilate = sequelize.define('invigilate', {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    type:DataTypes.STRING,
    test_order: DataTypes.STRING(50),
}, {
    timestamps: false,
})


Invigilate.belongsTo(Userinfo,{
    foreignKey:'name',
    targetKey: 'name'
})

module.exports=Invigilate;