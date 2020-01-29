const multer = require('multer');

const uploadFile = multer({
  // storage,
  limits: {
    fileSize: 7 * 1024 * 1024,
  }
});

module.exports = uploadFile