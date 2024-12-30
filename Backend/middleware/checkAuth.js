const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  try {
    // Get the token from cookies
    const token = req.cookies?.authToken;
    console.log(token)

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing. Please log in.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object
    req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error.message);
    return res.status(403).json({ message: 'Invalid or expired authentication token.' });
  }
};

module.exports = checkAuth;
