const Product = require('../models/Product');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ message: 'Product ID is required.' });
    }

    // Find and delete the product
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    res.status(200).json({ message: 'Product deleted successfully!', deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  deleteProduct,
};
