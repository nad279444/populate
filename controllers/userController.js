const { User } = require("../model/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const createNewUsers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.errors[0].msg });
  try {
    const { username, email, password } = req.body;
    //Password Security
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log("hash", hash);

    const newUser = new User({ username, email, password: hash });
    savedUser = await newUser.save();
    res.json({
      message: "create successful user",
      data: { username: savedUser.username, email: savedUser.email },
    });
  } catch (error) {
    res.json({ error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { createNewUsers, getAllUsers };
