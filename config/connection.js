// get the client
const mysql = require('mysql2');
const connection = require('sequelize');

let sequelize = new Sequelize('lyjvxhko4x8rygtp', 'mw48a0sjz64bevq3', 'fxhh2r5xenrr15cy', {
    host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
});

module.exports = connection;