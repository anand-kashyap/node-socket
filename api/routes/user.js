const express = require('express');
const { check, query } = require('express-validator');

const router = express.Router();

const user = require('../controllers/user'),
  { validate } = require('../utils/common'),
  pass = require('../controllers/password'),
  { checkToken } = require('../utils/middleware');

const validationArray = [
  check('email').exists().withMessage('Email is a required value').isEmail().withMessage('Email must be valid'),
  check('password').exists().withMessage('Password is a required value').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),
];

const queryValidations = [
  query('email').exists().withMessage('Email is a required value').isEmail().withMessage('Email must be valid'),
  query('userinput').exists().withMessage('Userinput is a required value').isLength({ min: 3 }).withMessage('Userinput must be at least 3 chars long')
];

router.get('/', user.getUsers);

router.post('/authenticate', [
  validate(
    [
      check('email').exists().withMessage('Email/Username is a required value').isLength({ min: 4 }).withMessage('Email/Username must be at least 5 chars long'),
      validationArray[1]
    ]
  )
], user.authUser);
router.get('/check-username', [checkToken, validate([queryValidations[1]])], user.checkUserName);
router.post('/search-user', [/* checkToken, */ validate([queryValidations[1]])], user.searchUser);
router.get('/user-details', [checkToken], user.getUserDetails);
router.get('/getbyUsername', [checkToken], user.getByUsername);
router.patch('/update-profile', [checkToken], user.updateProfile);

router.post('/register', [
  validate([
    check('firstName').exists().withMessage('First Name is a required value').isLength({ min: 3 }).withMessage('First Name must be at least 3 chars long'),
    ...validationArray
  ])], user.registerUser);

router.post('/store-notification/:userId', [/* checkToken, */
  validate([
    check('userId').isLength({ min: 5 }).withMessage('UserId must be of 5 chars at least'),
    check('data').exists().withMessage('Data key is required'),
  ])
], user.storeNotif);

router.post('/forgot-password', [
  validate([
    validationArray[0],
    check('baseUrl').exists().withMessage('Base Url is a required value')
  ])
], pass.forgotPassword);

router.post('/send-otp', [
  [checkToken],
  validate([
    validationArray[0],
  ])
], pass.sendOtp);

router.post('/confirm-otp', [
  [checkToken],
  validate([
    validationArray[0],
    check('otp').exists().withMessage('OTP is a required value')
  ])
], pass.confirmOtp);

router.put('/reset-password', [
  validate([
    validationArray[1],
    check('token').exists().withMessage('Token is a required value')
  ])
], pass.resetPassword);

router.put('/update-password', [
  [checkToken],
  validate([
    ...validationArray,
    check('newPassword').exists().withMessage('New Password is a required value').isLength({ min: 5 }).withMessage('New Password must be at least 5 chars long'),
  ])
], pass.updatePassword);

module.exports = router;