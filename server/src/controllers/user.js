const User = require("../models/user");

exports.createUser = async (req, res) => {
  const { firebaseUid, email, name } = req.body;

  try {
    // Check if a user with the same firebaseUid or email already exists
    const existingUser = await User.findOne({ $or: [{ firebaseUid }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email or Firebase UID already exists." });
    }

    const user = new User({ firebaseUid, email, name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
