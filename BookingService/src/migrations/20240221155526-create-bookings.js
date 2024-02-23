"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patientEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patientName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patientAge: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      patientMobile: {
        type: Sequelize.STRING,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      appointmentDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bookings");
  },
};
