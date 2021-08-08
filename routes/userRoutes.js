const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/auto-login', authController.autoLoginThroughCookies);
router.patch('/update-user/:id', authController.updateUser);
router.get('/searchUser/:role/:firstname', userController.searchUser);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:resetToken', authController.resetPassword);

// get total number of student or teacher

router.get('/count', userController.getTotal);
// results route
router.post('/addResult/:id', userController.addResult);
router.get('/results/:batch/:grade/:id', userController.getResults);
router.patch('/results/:userId/:resultId', userController.deleteResult);
// payment route
router.patch('/payment', userController.addPayment); // add payment to users document
router.get('/payment/:id/:batch/:grade', userController.getStudentPayments);

router.get('/', userController.getUsers);

module.exports = router;
