const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = require('../../db')
module.exports = sequelize.define('userinfo', {
    name: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
    },

    id_card: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    type: DataTypes.INTEGER,
    salary_number: DataTypes.STRING,
    sno: DataTypes.STRING,
    bank: DataTypes.STRING,
    bank_number: DataTypes.STRING,
    call_phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    office_phone: DataTypes.STRING,

    home_phone: DataTypes.STRING,

    organization: DataTypes.STRING,
    department: DataTypes.STRING,
    class: DataTypes.STRING,
    e_mail: DataTypes.STRING,

    weixin: DataTypes.STRING,

    qq: DataTypes.STRING,

    photo: DataTypes.STRING,
}, {
    timestamps: false,
})