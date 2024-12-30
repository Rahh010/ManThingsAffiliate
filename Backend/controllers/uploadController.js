const Product = require('../models/Product');

const uploadProduct = async (req, res) => {
  try {
    const { name, images, affiliateLink, category } = req.body;

    // Validate required fields
    if (
      !name ||
      !affiliateLink ||
      !images ||
      !Array.isArray(images) ||
      images.length === 0 ||
      !category
    ) {
      return res.status(400).json({ 
        message: 'All fields are required, including images as an array and category.' 
      });
    }

    // Create the product
    const product = new Product({
      name,
      images,
      affiliateLink,
      category, // Include category in the product creation
    });

    await product.save();

    res.status(201).json({ 
      message: 'Product uploaded successfully!', 
      product 
    });
  } catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).json({ 
      message: 'Internal server error.' 
    });
  }
};

module.exports = {
  uploadProduct,
};

