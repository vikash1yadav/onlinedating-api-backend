module.exports = (sequelize, DataTypes) => {
    const UserFood = sequelize.define('user_food', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
        food_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
    },
        {
            freezeTableName: true,
        });
        return UserFood;
}
