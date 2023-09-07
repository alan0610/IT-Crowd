"use strict";
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync();
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@gmail.com",
          roleId: 1,
          password: bcrypt.hashSync('admin', salt),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "noadmin@gmail.com",
          roleId: 2,
          password: bcrypt.hashSync('noadmin', salt),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
