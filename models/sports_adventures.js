module.exports = (sequelize, DataTypes) => {
  const Sports_Adventures = sequelize.define('sports_adventures', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sport_adventure: {
      type: DataTypes.STRING,
      // allowNull:false
    }

  },
    {
    });

  return Sports_Adventures;
}
