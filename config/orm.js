'use strict';

const connect = require('./connection');
const sqlize = require('sequelize');

let burgerStat = require('./sequelWise');

    /**
     * Get all data from `burgers` tbl
     * return array ordered by id
     */
function selectAll(cb) {
    connection.query('SELECT * FROM ??', [burgerStat])\
        .sui
        .success((projects) => {
            console.log(projects);
        });
    return cb(projects);
}

    /**
     * INSERTS data from form into `burgers` tbl
     * takes one param for burger name
     */
function insertOne (burger_name) {

}

    /**
     * Updates `burgers` tbl based on id
     * takes two params
     * burger id and new `devoured` data
     */
function updateOne (_id, _devoured) {

}

module.exports = { selectAll, insertOne, updateOne };

        
// module.exports = {

//     selectAll: (cb) => {
//        return sqlize.findAll(cb)
//     },
//     /**
//      * INSERTS data from form into `burgers` tbl
//      * takes one param for burger name
//      */
//     insertOne: (bg_name) => {
//         connect.execute('INSERT INTO burgers (burger_name) VALUES (?)', [bg_name], (error, result) => {
//             if (error) { return console.log(error); }
//         });
//     },
//     /**
//      * Updates `burgers` tbl based on id
//      * takes two params
//      * burger id and new `devoured` data
//      */
//     updateOne: (_id, _devoured) => {
//         connect.execute('UPDATE burgers SET devoured = ? WHERE id = ?;', [_devoured, _id], (error, result) => {
//             if (error) { return console.log(error); }
//         });
//     }
// }