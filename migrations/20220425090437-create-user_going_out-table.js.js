'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_going_out', {
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
    going_out_id: {
        type:Sequelize.INTEGER,
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
    await queryInterface.dropTable('user_going_out');
  }
};
