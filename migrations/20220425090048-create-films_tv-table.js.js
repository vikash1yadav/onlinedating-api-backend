'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films_tv', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      film_tv: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('films_tv');
  }
};
