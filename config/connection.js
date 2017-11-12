// get the client
const Sequelize = require('sequelize');

// instiantiate sequelize
const connection = new Sequelize('database', 'username', 'password', {
    "username": "cwpsvrczoumf3iz1",
    "password": "fi4rxb04gc10n94a",
    "database": "hf4ea8t6cjpf2nna",
    "host": "sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = connection;