const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Validator = require("../middlewares/validator");
const UserController = require("../controllers/usersController");

router.post(
  "/register",
  body("email", "invalid email").notEmpty().bail().isEmail(),
  body("password", "password required").notEmpty(),
  Validator.validateField,
  UserController.create
);

router.post(
  "/login",
  body("email", "invalid email").notEmpty().bail().isEmail(),
  body("password", "password required").notEmpty(),
  Validator.validateField,
  UserController.login
);

module.exports = router;
