const orm = require('../config/orm');

module.exports = {
    returnBurgers: (cb) => {
        orm.selectAll((result) => {
            return cb(result);
        });
    },

    addBurger: (bgName) => {
        orm.insertOne(bgName);
    },

    updateDevoured: (id, status) => {
        orm.updateOne(id, status);
    }
}