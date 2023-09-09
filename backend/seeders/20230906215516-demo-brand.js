"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Sony",
          logo_url: "https://1000marcas.net/wp-content/uploads/2020/01/Sony-logo.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lenovo",
          logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Apple",
          logo_url: "https://image.freepik.com/iconos-gratis/mac-os_318-10374.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
