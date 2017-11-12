const orm = require('../config/orm');

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }
    });
    return Post;
};

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