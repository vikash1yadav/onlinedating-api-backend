'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: 'pending',
        allowNull: true
      },
      nickname: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      gender_id: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      about_me: {
        type: Sequelize.STRING(1000),
        // allowNull: false,
      },
      passion: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      job: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      dob: {
        type: Sequelize.DATEONLY,
        // allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      hometown: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      current_location: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      // current_geog: {
      //   type: DataTypes.GEOGRAPHY,
      //   // allowNull: false,
      // },
      is_visible_age: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
      },
      is_show_contact: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
      },
      is_email_visible: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
      },
      is_hometown_visible: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
      },
      is_job_visible: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
      },
      is_show_initials: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
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
    await queryInterface.dropTable('users');
  }
};
