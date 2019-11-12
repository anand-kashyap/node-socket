const { validationResult } = require('express-validator');
/** Check Validation Error in request
 * @param  {Request} req: Request Object
 * @param  {Response} res: Response Object
 */
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