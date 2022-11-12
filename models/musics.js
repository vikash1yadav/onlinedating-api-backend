module.exports = (sequelize, DataTypes) => {
  const Musics = sequelize.define('musics', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    music: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {

    });
  return Musics;
}
