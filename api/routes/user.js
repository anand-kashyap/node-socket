const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const user = require('../controllers/user');
const middleware = require('../../config/middleware');

const validationArray = [
  check('email').exists().withMessage('Email is a required value').isEmail().withMessage('must be a valid email'),
  check('password').exists().withMessage('Password is a required value').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
];

router.get('/', user.getUsers);

router.post('/register', [
  check('firstName').exists().withMessage('First Name is a required value').isLength({ min: 3 }).withMessage('First Name must be at least 3 chars long'),
...validationArray], user.registerUser);

router.post('/authenticate',[
  ...validationArray
], user.authUser);

router.post('/forgot-password', [validationArray[0],
check('baseUrl').exists().withMessage('baseUrl is a required value')], user.forgotPassword);

router.post('/verify-account', [
  validationArray[0],
], user.verifyAccount);

router.put('/reset-password',[
  ...validationArray,
  check('token').exists().withMessage('token is a required value')
], user.resetPassword);

router.put('/update-password',[
  [middleware.checkToken],
  ...validationArray,
  check('newPassword').exists().withMessage('New Password is a required value').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
], user.updatePassword);

module.exports = router;