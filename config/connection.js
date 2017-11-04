// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mw48a0sjz64bevq3',
    database: 'lyjvxhko4x8rygtp',
    password: 'fxhh2r5xenrr15cy',
});

module.exports = connection;