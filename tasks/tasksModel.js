const Sequelize = require('sequelize')
const connection = require('../db/sequelize')

const tasks = connection.define('tasks', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = tasks