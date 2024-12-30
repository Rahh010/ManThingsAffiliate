const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set the token as an HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,  // 1 hour
      sameSite: 'None',
      secure: true,  // Ensure it's only sent over HTTPS
      domain: '.vercel.app',  // For subdomains
    })
    .status(200)
    .json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully!"});
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
