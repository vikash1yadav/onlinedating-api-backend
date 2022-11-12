'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('going_out', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,
        // allowNull:false
      },
      //   geo_location: {
    //     type: Sequelize.GEOGRAPHY,
    //     // allowNull: false,
    //   },
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
    await queryInterface.dropTable('going_out');
  }
};
