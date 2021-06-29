const express = require('express');
const authController = require('./../controllers/authController')
const userController = require('./../controllers/userController')

const router = express.Router();


router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/auto-login', authController.autoLoginThroughCookies);
router.post('/update-user', authController.protectRoutes, authController.updateUser)

router.get('/', userController.getUsers)


module.exports = router;