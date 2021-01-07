
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db')

module.exports = sequelize.define('admin', {
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: DataTypes.STRING,
    username: {
        type:DataTypes.STRING,
        unique:true,
    }
});
