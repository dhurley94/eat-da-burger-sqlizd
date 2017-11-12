module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        /**
         * Instantiates burger and verifies that input is not empty
         * Using the native sequelize validate command
         */
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        /**
         * Creates `devoured` row
         * Used to determine if burger has been eaten
         */
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        /**
         * Not actively used, but exists for future iterations
         */
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });
    return Burger;
};