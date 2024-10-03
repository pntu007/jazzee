const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

// router
//     .route('/')
//     .get(productController.getAllProduct)
//     .post(productController.createProduct);

    router.get('/', productController.getAllProduct);
    router.post('/create', productController.createProduct);
    router.get('/:slug',productController.getThisProduct);

module.exports = router;