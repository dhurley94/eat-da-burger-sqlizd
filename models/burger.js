const orm = require('../config/orm');

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isAlpha,
                notEmpty
            }
        }
    });
    return Burger;
};