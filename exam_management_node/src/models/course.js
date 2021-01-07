const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db')
module.exports =  sequelize.define('course', {
        test_order: DataTypes.STRING(50),
        course_code: {
            type:DataTypes.STRING(50),
            unique:true,
            allowNull:false,
        },
        course_name: DataTypes.STRING(50),
        sum: DataTypes.INTEGER,
    }, {
        timestamps: false,
    })
