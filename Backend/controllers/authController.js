const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    // Set the token as an HTTP-only cookie
    res
      .cookie("authToken", token, {
        httpOnly: true, // Prevent access via JavaScript
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        sameSite: 'None',
        domain: '.vercel.app',  // Ensures the cookie is accessible across subdomains (like `manthings.vercel.app` and `manthingsserver.vercel.app`)      
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
