"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Camera Sony",
          description:
            "The Sony Camera is a powerful digital camera that combines exceptional image quality with portability. Equipped with a high-resolution sensor and cutting-edge technology, it captures sharp and vibrant images and videos. Its compact design makes it the ideal companion for photographers and filmmakers on the go.",
          image_url:
            "https://images.fravega.com/f1000/e5500609e599b91ae9316b0b9a5551c2.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sony Earphones",
          description: "Sony earphones are the ultimate choice for music lovers and high-quality audio enthusiasts. With a sleek design and exceptional comfort, these headphones provide an immersive sound experience. With Sony's leading technology, you'll enjoy deep bass, clear trebles, and advanced noise cancellation to immerse yourself in your favorite music anywhere.",
          image_url:
            "https://www.megatone.net/images/Articulos/zoom2x/1/02/MKT0046SON.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPhone 14 Pro Max",
          description: "The iPhone 14 Pro Max is a cutting-edge smartphone with a powerful camera, ProMotion display, outstanding performance, and long-lasting battery. It delivers a premium experience in mobile communication and entertainment.",
          image_url:
            "https://www.macstation.com.ar/img/productos/3119-2.jpg",
          price: 10000,
          brandId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPad Air",
          description: "The iPad Air is a sleek and powerful tablet. With its lightweight design, stunning Retina display, and fast performance, it's perfect for work, creativity, and entertainment on the go.",
          image_url:
            "https://www.macstation.com.ar/img/productos/2850-mm6r3le-a-10-9-inch-ipad-air-wi-fi-cellular-64gb-gris-espacial-space-grey.jpg",
          price: 10000,
          brandId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo Tab P11 Pro",
          description: "The Lenovo Tab P11 Pro is a versatile Android tablet. It boasts a brilliant OLED display, powerful performance, and a premium design, making it ideal for productivity and entertainment.",
          image_url:
            "https://www.lenovo.com/medias/lenovo-tab-p11-pro-subseries-hero.png?context=https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzU3NzM0fGltYWdlL3BuZ3xoMzEvaGM4LzExMTAxMzQ5NTc2NzM0LnBuZ3xmZjJhYWM3YTU5NDU0OTJmODE0ZGI4OTNkNzhmMDQ4MzA3M2Y5MmI5M2YzZGRkOGNjNWY5NDRlZjJkMDE1NjA3/lenovo-tab-p11-pro-subseries-gallery-10.png",
          price: 10000,
          brandId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tablet Lenovo",
          description: "The Lenovo tablet is a versatile device with a sleek design, powerful performance, and a user-friendly interface. It offers a seamless experience for work, entertainment, and creativity on the go.",
          image_url:
            "https://axa.com.ar/webaxa/27932/tablet-lenovo-tab-m8-hd-2nd-gen-tb-8505f-8-32gb-iron-gray.jpg",
          price: 10000,
          brandId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Playstation 5",
          description: "The PlayStation 5 is a cutting-edge gaming console known for its stunning graphics, lightning-fast load times, and immersive gameplay. It delivers a next-level gaming experience with a diverse library of titles.",
          image_url:
            "https://nextgames.com.ar/img/Public/1040-producto-ps5-1-2038.jpg",
          price: 10000,
          brandId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
