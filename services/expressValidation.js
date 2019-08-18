const { validationResult } = require('express-validator');

const checkValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return true;
  } else {
    return false;
  }
};

module.exports = checkValidationErrors;