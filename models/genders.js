module.exports = (sequelize, DataTypes) => {
  const Genders = sequelize.define('genders', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {

    });
  return Genders;
}
