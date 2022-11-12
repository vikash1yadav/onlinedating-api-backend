module.exports = (sequelize, DataTypes) => {
    const UserGoingOut = sequelize.define('user_going_out', {
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
        going_out_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
    },
        {
            freezeTableName: true,
        });
        return UserGoingOut;
}
