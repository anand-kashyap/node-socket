const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const user = require('../controllers/user');
const pass = require('../controllers/password');
const middleware = require('../../config/middleware');

const validationArray = [
  check('email').exists().withMessage('Email is a required value').isEmail().withMessage('Email must be valid'),
  check('password').exists().withMessage('Password is a required value').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
];

const queryValidations = [
  check('email').exists().withMessage('Email is a required value').isEmail().withMessage('Email must be valid'),
  check('userinput').exists().withMessage('Userinput is a required value').isLength({ min: 3 }).withMessage('Userinput must be at least 3 chars long')
];

router.get('/', user.getUsers);

router.post('/authenticate', [
  ...validationArray
], user.authUser);
router.get('/check-username', [middleware.checkToken, ...queryValidations], user.checkUserName);
router.post('/search-user', [/* middleware.checkToken, */ queryValidations[1]], user.searchUser);
router.get('/user-details', [middleware.checkToken], user.getUserDetails);
router.patch('/update-profile', [middleware.checkToken], user.updateProfile);

router.post('/register', [
  check('firstName').exists().withMessage('First Name is a required value').isLength({ min: 3 }).withMessage('First Name must be at least 3 chars long'),
  ...validationArray], user.registerUser);

router.post('/store-notification/:userId', [/* middleware.checkToken, */
  check('userId').isLength({ min: 5 }).withMessage('UserId must be of 5 chars at least'),
  check('data').exists().withMessage('Data key is required'),
], user.storeNotif);

router.post('/forgot-password', [validationArray[0],
check('baseUrl').exists().withMessage('Base Url is a required value')], pass.forgotPassword);

router.post('/send-otp', [
  [middleware.checkToken],
  validationArray[0],
], pass.sendOtp);

router.post('/confirm-otp', [
  [middleware.checkToken],
  validationArray[0],
  check('otp').exists().withMessage('OTP is a required value')
], pass.confirmOtp);

router.put('/reset-password', [
  validationArray[1],
  check('token').exists().withMessage('Token is a required value')
], pass.resetPassword);

router.put('/update-password', [
  [middleware.checkToken],
  ...validationArray,
  check('newPassword').exists().withMessage('New Password is a required value').isLength({ min: 5 }).withMessage('New Password must be at least 5 chars long'),
], pass.updatePassword);

module.exports = router;