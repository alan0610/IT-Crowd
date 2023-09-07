"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Camera",
          description: "Camera Sony",
          image_url: "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
