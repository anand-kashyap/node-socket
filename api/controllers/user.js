
const getUsers = (req, res, next) => {
  console.log(req.query);
  return res.status(200).json({message: 'working!'});
}

const createUser = (req, res, next) => {

}

const forgotPassword = (req, res, next) => {

}

module.exports = {
  getUsers,
  createUser,
  forgotPassword
}