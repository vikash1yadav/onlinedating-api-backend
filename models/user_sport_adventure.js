module.exports = (sequelize, DataTypes) => {
    const User_Sport_Adventure = sequelize.define('user_sports_adventures', {
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
        sport_adventure_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
    },
        {
            freezeTableName: true,
        });
    return User_Sport_Adventure;
}
