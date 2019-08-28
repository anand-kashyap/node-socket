const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const user = require('../controllers/user');
const middleware = require('../../config/middleware');

const validationArray = [
  check('email').exists().withMessage('Email is a required value').isEmail().withMessage('Email must be valid'),
  check('password').exists().withMessage('Password is a required value').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
];

router.get('/', user.getUsers);

router.get('/check-username', [middleware.checkToken], user.checkUserName);
router.get('/user-details', [middleware.checkToken], user.getUserDetails);
router.patch('/update-profile', [middleware.checkToken], user.updateProfile);

router.post('/register', [
  check('firstName').exists().withMessage('First Name is a required value').isLength({ min: 3 }).withMessage('First Name must be at least 3 chars long'),
...validationArray], user.registerUser);

router.post('/authenticate',[
  ...validationArray
], user.authUser);

router.post('/forgot-password', [validationArray[0],
check('baseUrl').exists().withMessage('Base Url is a required value')], user.forgotPassword);

router.post('/send-otp', [
  [middleware.checkToken],
  validationArray[0],
], user.sendOtp);

router.post('/confirm-otp', [
  [middleware.checkToken],
  validationArray[0],
  check('otp').exists().withMessage('OTP is a required value')
], user.confirmOtp);

router.put('/reset-password',[
  ...validationArray,
  check('token').exists().withMessage('Token is a required value')
], user.resetPassword);

router.put('/update-password',[
  [middleware.checkToken],
  ...validationArray,
  check('newPassword').exists().withMessage('New Password is a required value').isLength({ min: 5 }).withMessage('New Password must be at least 5 chars long'),
], user.updatePassword);

module.exports = router;