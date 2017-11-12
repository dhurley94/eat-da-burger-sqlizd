// get the client
<<<<<<< HEAD
const mysql = require('mysql2');
const connection = require('sequelize');

let sequelize = new Sequelize('lyjvxhko4x8rygtp', 'mw48a0sjz64bevq3', 'fxhh2r5xenrr15cy', {
    host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
=======
const Sequelize = require('sequelize');

// instiantiate sequelize
const connection = new Sequelize('database', 'username', 'password', {
    host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mw48a0sjz64bevq3',
    database: 'lyjvxhko4x8rygtp',
    password: 'fxhh2r5xenrr15cy',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
>>>>>>> 99c68bce02eee6f42428dcb27b029d64bd21926e
});

module.exports = connection;