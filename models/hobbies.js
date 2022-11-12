module.exports = (sequelize, DataTypes) => {
  const Hobbies = sequelize.define('hobbies', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    hobby: {
      type: DataTypes.STRING,
      // allowNull:false
    }
  },
    {
      
    });
    return Hobbies;
}
