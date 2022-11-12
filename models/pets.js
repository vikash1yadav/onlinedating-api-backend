module.exports = (sequelize, DataTypes) => {
  const Pets = sequelize.define('pets', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    pet: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {
    });

  return Pets;
}
