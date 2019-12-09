const express = require('express');

const router = express.Router();
const { deleteUser } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);

module.exports = router;
