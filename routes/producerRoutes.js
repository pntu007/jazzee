const express = require('express');
const producerController = require('./../controller/producerController');

const router = express.Router();

router
    .route('/')
    .get(producerController.getAllProduct)
    .post(producerController.createProduct);

module.exports = router;