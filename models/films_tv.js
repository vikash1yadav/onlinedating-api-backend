module.exports = (sequelize, DataTypes) => {
  const Films_Tv = sequelize.define('films_tv', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    film_tv: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {
      freezeTableName: true,
    });
  return Films_Tv;
}
