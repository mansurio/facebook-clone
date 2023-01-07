const userModel = require('../models/userModel');

exports.registerUserController = async (req, res) => {
  
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;
    const user = await new userModel({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(userModel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
