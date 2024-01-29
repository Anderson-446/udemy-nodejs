const { DataTypes } = require('sequelize');
const db = require('../db/conn.js')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true //não deixa passar um campo vazio
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User;