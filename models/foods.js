module.exports = (sequelize, DataTypes) => {
  const Foods = sequelize.define('foods', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    food: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {
    });
  return Foods;
}
