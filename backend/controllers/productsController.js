const models = require("../models");

class ProductsController {
  static async getAll(req, res) {
    try {
      const { name, description } = req.query;
      const whereCondition = {};
      if (name) {
        whereCondition.name = { [models.Sequelize.Op.like]: `%${name}%` };
      }
      if (description) {
        whereCondition.description = { [models.Sequelize.Op.like]: `%${description}%` };
      }

      const products = await models.Product.findAll({ where: whereCondition });

      if (products.length > 0) {
        res.status(200).json(products);
      } else {
        res.status(404).send({ msg: "Products not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Internal Server error" });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    let product;
    try {
      product = await models.Product.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server error" });
    }
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "Product not found" });
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const newProduct = await models.Product.create(data);
      return res.status(200).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal Server error" });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, description, image_url, price, brand_id } = req.body;
    let productsUpdated = {};

    try {
      productsUpdated = await models.Product.findByPk(id);

      if (productsUpdated) {
        productsUpdated.name = title;
        productsUpdated.description = description;
        productsUpdated.image_url = image_url;
        productsUpdated.price = price;
        productsUpdated.brand_id = brand_id;
        await productsUpdated.save();
        return res.status(200).json(productsUpdated);
      } else {
        return res.status(404).json("No existe el producto");
      }
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server error" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteProduct = await models.Product.destroy({ where: { id } });
      if (deleteProduct) {
        return res.status(200).send({ msg: "El producto fue eliminado" });
      } else {
        return res.status(404).json({ msg: "Ese producto no existe" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Ah ocurrido un error", error });
    }
  }
}

module.exports = ProductsController;
