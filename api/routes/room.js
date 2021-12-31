const express = require('express');
const { body } = require('express-validator');

const router = express.Router();
const { checkToken } = require('../utils/middleware');

const { findCreateRoom, getRooms, deleteRoom, deleteSingleMessage, clearMsgs, getRecentChats, getRoomById } = require('../controllers/room');

router.put('/', [
  // middleware.checkToken,
  body('currentUser').exists().withMessage('is required'),
  body('userNameArr').isArray().withMessage('must be an array').custom((userArr, { req }) => {
    if (userArr.length < 1) {
      throw new Error('must have at least 1 users');
    }
    for (const user of userArr) {
      if (typeof user !== 'string' || user === '') {
        throw new Error('must contain non empty strings only');
      }
    }
    return true;
  }),
  body('initMsgs').optional().isInt({ max: 200, min: 20 }).withMessage('must be between range 20 to 200'),
  body('directMessage').optional().isBoolean()
], findCreateRoom);

router.get('/', getRooms);
router.get('/recentChats/:userName', [checkToken], getRecentChats);
router.get('/:roomId', [checkToken], getRoomById);
router.delete('/:roomId', deleteRoom);
router.delete('/:roomId/message/:msgId', deleteSingleMessage);
router.delete('/:roomId/clearMsgs', clearMsgs);

module.exports = router;