const express = require('express');
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getOverview);
// router.get('/product/:slug', authController.isLoggedIn, viewsController.getProduct);
router.get('/product/:slug', viewsController.getProduct);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
