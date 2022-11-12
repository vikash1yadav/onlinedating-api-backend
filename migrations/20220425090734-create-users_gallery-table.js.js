'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_gallery', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        // allowNull:false
      },
      file_type: {
        type: Sequelize.ENUM('gallery', 'Adhaar', 'DL', 'Voter_id'),
        // allowNull:false
      },
      media_url: {
        type: Sequelize.STRING(500),
        // allowNull:false
      },
      file_extension: {
        type: Sequelize.STRING,
        // allowNull:false
      },
      is_primary: {
        type: Sequelize.BOOLEAN,
        // allowNull:false
      },
      sequence_number: {
        type: Sequelize.INTEGER,
        // allowNull:false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_gallery');
  }
};
