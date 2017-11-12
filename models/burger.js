module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha,
                notEmpty
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Burger;
};