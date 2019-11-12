const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const middleware = require('../../config/middleware');

const room = require('../controllers/room');

router.put('/', [
    // middleware.checkToken,
    check('userNameArr').isArray().withMessage('must be an array').custom((value, { req }) => {
        if (value.length < 2) {
            throw new Error('must have at least 2 users');
        }
        return true;
    }),
    check('initMsgs').optional().isInt({ max: 200, min: 20 }).withMessage('must be between range 20 to 200'),
    check('directMessage').optional().isBoolean()
], room.findCreateRoom);

module.exports = router;