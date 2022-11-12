module.exports = (sequelize, DataTypes) => {
    const User_Hobby = sequelize.define('user_hobby', {
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
        hobby_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
    },
        {
            freezeTableName: true,
        });
        return User_Hobby;
}
