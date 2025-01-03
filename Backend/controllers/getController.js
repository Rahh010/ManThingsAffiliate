const Product = require('../models/Product'); // Ensure the correct path to your Product model

const getAllProducts = async (req, res) => {
  try {
    const {  category } = req.query; // Default limit to 10 and page to 1

    // Fetch products with limit and skip for pagination
    const products = await Product.find({ category });

    res.status(200).json({
      message: 'Products fetched successfully!',
      count: products.length,
      products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products.', error: error.message });
  }

};

const getSingleProduct = async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the request parameters
  
      const product = await Product.findById(id); // Find the product by ID
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
      }
  
      res.status(200).json({ message: 'Product fetched successfully!', product });
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Failed to fetch the product.', error: error.message });
    }
  };
  

module.exports = {
  getAllProducts,
  getSingleProduct
};
