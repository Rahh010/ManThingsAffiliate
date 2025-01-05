const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
if(process.env.NODE_ENV == 'development') {
  app.use(cors({
    origin: 'http://localhost:5173', // Replace with your front-end URL
    credentials: true, // Allow cookies to be sent with requests
  }));
  console.log("development")
}

if(process.env.NODE_ENV == 'production') {
  app.use(cors({
    origin: 'https://manthings.vercel.app' || '*',  // Ensure this is set correctly
    credentials: true, // Allow cookies to be sent with requests
  }));
}



// Increase payload size limit
app.use(bodyParser.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/products', require('./routes/productRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
