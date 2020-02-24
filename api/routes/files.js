const express = require('express');
const uploadFile = require('../utils/uploadFile');

const router = express.Router();

const { getFile, upload } = require('../controllers/files');
router.get('/:fileName', getFile);
router.post('/upload', uploadFile.single('file'), upload);


module.exports = router;
