module.exports = (sequelize, DataTypes) => {
    const User_Film_Tv = sequelize.define('user_film_tv', {
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
        film_tv_id: {
            type: DataTypes.INTEGER,
            // allowNull:false
        },
    },
        {
            freezeTableName: true,
        });

    return User_Film_Tv;
}
