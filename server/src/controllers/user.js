const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { firebaseUid, email, name } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ firebaseUid }, { email }] });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with the same firebaseUid or email already exists" });
    }

    const user = new User({ firebaseUid, email, name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
