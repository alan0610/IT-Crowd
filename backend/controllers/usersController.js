const { User } = require("../models");
const bcrypt = require("bcrypt");
const JwtUtils = require("../utils/jwtUtils");

class UserController {

  //CREATE USER
  static async create(req, res) {
    const data = req.body;
    try {
      data.password = await UserController.encryptPassword(data.password);
      const newUser = await User.create(data);
      delete newUser.dataValues.password;
      res.status(200).send(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Internal Server error" });
    }
  }

  //GET USER BY ID
  static async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  //GET USER BY EMAIL
  static async getByEmail(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid email");
    }
    return user.dataValues;
  }

  //ENCRYPT PASSWORD WITH BCRYPT
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const passwordEncripted = await bcrypt.hash(password, salt);
    return passwordEncripted;
  }

  //LOGIN
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const validPass = bcrypt.compareSync(password, user.password);
        if (validPass) {
          const token = JwtUtils.generateToken({
            id: user.id,
            email: user.email,
            roleId: user.roleId,
          });
          res.status(200).json({ msg: "Logged in successfully", token });
        } else {
          res.status(401).json("Wrong password");
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).json("Server error");
    }
  }
}

module.exports = UserController;
