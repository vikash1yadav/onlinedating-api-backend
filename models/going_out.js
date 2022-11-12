module.exports = (sequelize, DataTypes) => {
  const Going_Out = sequelize.define('going_out', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
      // allowNull:false
    },
    //   geo_location: {
    //     type: DataTypes.GEOGRAPHY,
    //     // allowNull: false,
    //   },
  },
    {
      freezeTableName: true,
    });
  return Going_Out;
}
