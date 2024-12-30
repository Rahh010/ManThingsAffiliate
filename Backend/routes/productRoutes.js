const express = require('express');
const { uploadProduct } = require('../controllers/uploadController');
const { deleteProduct } = require('../controllers/deleteController');
const checkAuth = require('../middleware/checkAuth');
const { getAllProducts, getSingleProduct } = require('../controllers/getController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/upload', checkAuth, uploadProduct);
router.delete('/delete/:id', checkAuth, deleteProduct);

module.exports = router;
