const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/auto-login', authController.autoLoginThroughCookies);
router.patch('/update-user/:id', authController.updateUser);
router.get('/searchUser/:role/:firstname', userController.searchUser);

router.get('/', userController.getUsers);

module.exports = router;
