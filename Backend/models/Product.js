const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // URLs or Base64 strings of images
      required: true,
    },
  ],
  affiliateLink: {
    type: String,
    required: true,
  },
  category: {
    type: String, // Category name (e.g., "Electronics", "Fashion")
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);