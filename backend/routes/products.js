const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Validator = require("../middlewares/validator");

const ProductController = require("../controllers/productsController");
const RoleValidator = require("../middlewares/roleValidator");

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post(
  "/",
  body("name", "name required").notEmpty(),
  body("description", "description required").notEmpty(),
  body("image_url", "image required").notEmpty(),
  body("brandId", "brandId required").notEmpty(),
  body("price", "price required").notEmpty().isInt(),
  Validator.validateField,
  RoleValidator.isAdmin,
  ProductController.create
);
router.delete("/:id", RoleValidator.isAdmin, ProductController.delete);
router.put("/:id", RoleValidator.isAdmin, ProductController.update);

module.exports = router;
