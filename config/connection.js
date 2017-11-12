// get the client
const mysql = require('mysql2');
const Sequelize = require('sequelize');

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
});

module.exports = connection;