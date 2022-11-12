module.exports = (sequelize, DataTypes) => {
  const Users_Gallery = sequelize.define('users_gallery', {
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
    file_type: {
      type: DataTypes.ENUM('gallery', 'Adhaar', 'DL', 'Voter_id'),
      // allowNull:false
    },
    media_url: {
      type: DataTypes.STRING(500),
      // allowNull:false
    },
    file_extension: {
      type: DataTypes.STRING,
      // allowNull:false
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      // allowNull:false
    },
    sequence_number: {
      type: DataTypes.INTEGER,
      // allowNull:false
    },
  },
    {
      freezeTableName: true,
    });
  return Users_Gallery;
}
