const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const middleware = require('../../config/middleware');

const room  = require('../controllers/room');

router.put('/', room.findCreateRoom);

module.exports = router;