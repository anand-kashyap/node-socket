const { validationResult } = require('express-validator');

const sortByDate = (property, subP) => {
  return function (a, b) {
    if (!a[property] || !b[property]) {
      return 0;
    }
    const aDate = a[property][subP];
    const bDate = b[property][subP];
    if (aDate < bDate)
      return 1;
    else if (aDate > bDate)
      return -1;

    return 0;
  }
}


const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(v => v.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(422).json({ errors: errors.array() });
  };
};

module.exports = { sortByDate, validate };