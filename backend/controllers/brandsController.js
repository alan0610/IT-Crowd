const models = require("../models");

class BrandsController {

  //GET ALL BRANDS
  static async getAll(req, res) {
    try {
      const brands = await models.Brand.findAll();
      if (brands) {
        res.status(200).json(brands);
      } else {
        res.status(404).send({ msg: "There is no brands" });
      }
    } catch (error) {
      res.status(500).send({ msg: "An error has occurred" });
      console.error(error);
    }
  }

  //GET BRAND BY ID
  static async getById(req, res) {
    const { id } = req.params;
    let brand;
    try {
      brand = await models.Brand.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: "An error has occurred" });
    }
    if (brand) {
      return res.status(200).json(brand);
    } else {
      return res.status(404).json({ msg: "Brand not found" });
    }
  }

  //CREATE BRAND
  static async create(req, res) {
    const data = req.body;
    try {
      const newBrand = await models.Brand.create(data);
      return res.status(200).json(newBrand);
    } catch (e) {
      console.error(error);
      return res.status(500).json({ msg: "An error has occurred" });
    }
  }

  //UPDATE BRAND
  static async update(req, res) {
    const { id } = req.params;
    const { name, logo_url } = req.body;
    let brandsUpdated = {};

    try {
      brandsUpdated = await models.Brand.findByPk(id);
      if (brandsUpdated) {
        brandsUpdated.name = name;
        brandsUpdated.logo_url = logo_url;
        await brandsUpdated.save();
        return res.status(200).json(brandsUpdated);
      } else {
        return res.status(404).json({ msg: "Brand not found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "An error has occurred" });
    }
  }

  //DELETE BRAND
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteBrand = await models.Brand.destroy({ where: { id } });
      if (deleteBrand) {
        return res.status(200).send({ msg: "The Brand has been eliminated" });
      }
      return res.status(404).json({ msg: "This brand doesn't exist" });
    } catch (error) {
      res.status(500).json({ msg: "An error has occurred" });
    }
  }
}

module.exports = BrandsController;
