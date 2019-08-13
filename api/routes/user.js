const express = require('express');

const router = express.Router();

const user = require('../controllers/user');

router.get('/', user.getUsers);
router.post('/create-user', user.createUser);
router.post('/forgot-password', user.forgotPassword);

module.exports = router;