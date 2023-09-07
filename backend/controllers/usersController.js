const { User } = require("../models");
const bcrypt = require("bcrypt");
const JwtUtils = require("../utils/jwtUtils");

class UserController {
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

  static async getByEmail(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Email Invalido');
    }
    return user.dataValues;
  }

  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const passwordEncripted = await bcrypt.hash(password, salt);
    return passwordEncripted;
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const validPass = bcrypt.compareSync(password, user.password);
        if (validPass) {
          const { email } = user.dataValues;
          const token = JwtUtils.generateToken({ email });
          res.status(200).json({ msg: "Valid email and password", token });
        } else {
          res.json("Wrong password");
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).json("ok: false");
    }
  }
}

module.exports = UserController;
