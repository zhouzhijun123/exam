const {
    Sequelize,
    DataTypes
} = require('sequelize');

const sequelize = require('../../db')
const Userinfo = require('./userinfo')
const Course = require('./course')

var Cost = sequelize.define('cost', {
    test_order: DataTypes.STRING(50),
    course_code: {
        type:DataTypes.STRING,
        allowNull:false
    },
    course_name: DataTypes.STRING(50),
    sum: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    assign: DataTypes.STRING,
}, {
    timestamps: false,
})

Cost.belongsTo(Userinfo, {
    foreignKey: 'name',
    targetKey: 'name',
})

Cost.belongsTo(Course,{
    foreignKey:'course_code',
    targetKey:'course_code',
})

module.exports=Cost;