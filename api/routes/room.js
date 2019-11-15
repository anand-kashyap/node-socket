const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const middleware = require('../../config/middleware');

const { findCreateRoom, getRooms, deleteRoom, deleteSingleMessage, clearMsgs, getRecentChats, getRoomById } = require('../controllers/room');

router.put('/', [
  // middleware.checkToken,
  check('userNameArr').isArray().withMessage('must be an array').custom((userArr, { req }) => {
    if (userArr.length < 2) {
      throw new Error('must have at least 2 users');
    }
    for (const user of userArr) {
      if (typeof user !== 'string' || user === '') {
        throw new Error('must contain non empty strings only');
      }
    }
    return true;
  }),
  check('initMsgs').optional().isInt({ max: 200, min: 20 }).withMessage('must be between range 20 to 200'),
  check('directMessage').optional().isBoolean()
], findCreateRoom);

router.get('/', getRooms);
router.get('/recentChats/:userName', [middleware.checkToken], getRecentChats);
router.get('/:roomId'/* , [middleware.checkToken] */, getRoomById);
router.delete('/:roomId', deleteRoom);
router.delete('/:roomId/message/:msgId', deleteSingleMessage);
router.delete('/:roomId/clearMsgs', clearMsgs);

module.exports = router;