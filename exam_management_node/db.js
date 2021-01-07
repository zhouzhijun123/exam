
const {
    Sequelize
} = require('sequelize');
const config=require('./src/config/config');

module.exports = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});