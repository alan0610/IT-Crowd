const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Validator = require("../middlewares/validator");

const BrandsController = require("../controllers/brandsController");
const RoleValidator = require("../middlewares/roleValidator");

router.get("/", BrandsController.getAll);
router.get("/:id", BrandsController.getById);
router.post(
  "/",
  body("name", "name required").notEmpty(),
  body("logo_url", "logo picture required").notEmpty(),
  Validator.validateField,
  RoleValidator.isAdmin,
  BrandsController.create
);
router.delete("/:id", RoleValidator.isAdmin, BrandsController.delete);
router.put("/:id", RoleValidator.isAdmin, BrandsController.update);

module.exports = router;
