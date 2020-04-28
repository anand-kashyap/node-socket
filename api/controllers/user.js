const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mail = require("../../services/sendmail");
const checkValidation = require("../../services/expressValidation");

const { User } = require("../models/user");

const getUsers = (req, res, next) => {
  // return res.status(200).json({ users: "test" });
  User.find({ isAdmin: false }).lean().then((users) => {
    // console.log(users);
    return res.status(200).json(users);
  }, err => {
    console.log(err);
    return res.status(400).json(err.message);
  });
};

const getUserDetails = (req, res, next) => {
  if (checkValidation(req, res)) return;
  // return res.status(200).json({ users: "test" });
  User.findOne({ email: req.query.email.trim() }).lean().then(
    user => {
      console.log(user);
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "User details found", data: user });
      }
      return res
        .status(404)
        .json({ success: true, message: "User not found", data: {} });
    },
    err => {
      console.log(err);
      return res
        .status(400)
        .json({ success: false, message: err.message, data: {} });
    }
  );
};

const getByUsername = (req, res, next) => {
  if (checkValidation(req, res)) return;
  // return res.status(200).json({ users: "test" });
  User.findOne({ username: req.query.uname.trim() }).lean().then(
    user => {
      // console.log(user);
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "User details found", data: user });
      }
      return res
        .status(404)
        .json({ success: true, message: "User not found", data: {} });
    },
    err => {
      console.log(err);
      return res
        .status(400)
        .json({ success: false, message: err.message, data: {} });
    }
  );
};

const checkUserName = (req, res, next) => {
  if (checkValidation(req, res)) return;
  console.log("req.query", req.query);
  const userInput = req.query.userinput.trim();
  const email = req.query.email.toLowerCase();
  User.findOne({ username: userInput }).lean().then(
    resp => {
      console.log(resp);
      if (resp && resp.email !== email) {
        return res.status(200).json({ success: true, exists: true });
      }
      return res.status(200).json({ success: true, exists: false });
    },
    err => {
      console.log(err);
      return res.status(406).json({ message: err.message });
    }
  );
};

const searchUser = (req, res, next) => {
  if (checkValidation(req, res)) return;
  const userInput = req.query.userinput.trim();
  const cUser = req.body.user;
  User.find(
    {
      $or: [
        { username: { $regex: `.*${userInput}.*`, $options: 'i', $ne: cUser.username } },
        { email: { $regex: userInput, $options: 'i', $ne: cUser.email } },
        { fullName: { $regex: `.*${userInput}.*`, $options: 'i', $ne: cUser.fullName } },
      ]
    }).limit(20).then(
      resp => {
        return res.status(200).json({ success: true, data: resp });
      },
      err => {
        console.log(err);
        return res.status(406).json({ message: err.message });
      }
    );
};

const userToken = (oldUser, remember = false) => { // remember me expires after 2 weeks
  let payload = {
    id: oldUser._id,
    notificationSub: oldUser.notificationSub,
    email: oldUser.email,
    username: oldUser.username,
    fullName: oldUser.fullName,
    isAdmin: oldUser.isAdmin,
    active: oldUser.active,
    priceGroup: oldUser.priceGroup,
    isVerified: oldUser.isVerified
  };
  const expiresIn = remember ? '14d' : '24h';
  let token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn // expires in 24 hours 24h
  });
  return token;
};

const registerUser = (req, res, next) => {
  if (checkValidation(req, res)) return;
  body = req.body;
  body.email = body.email.toLowerCase();
  User.findOne({ email: body.email }).lean().then(oldUser => {
    if (!oldUser) {
      const hashPassword = bcrypt.hashSync(body.password, process.env.salt);
      if (!body.isAdmin) {
        body.isAdmin = false;
      }

      newUser = new User({
        // userId: body.userId,
        firstName: body.firstName,
        lastName: body.lastName,
        isAdmin: body.isAdmin,
        email: body.email,
        phone: body.phone,
        // imageUrl: body.imageUrl,
        active: true,
        password: hashPassword
      });
      newUser.save().lean().then((newUserDoc, err) => {
        if (err) {
          console.log(err);
        }
        console.log(newUserDoc.email);
        mail.sendWelcomeMail(newUserDoc.email, function (err, info) {
          if (err) return next(err);
          console.log("info from mail");
          console.log(info);
          const token = userToken(newUserDoc);
          return res.status(201).send({
            token,
            success: true,
            message: "User created successfully!"
          });
        });
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Email already exists" });
    }
  });
};

const authUser = (req, res, next) => {
  if (checkValidation(req, res)) return;
  body = req.body;
  const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const isMail = emailRegex.test(body.email);
  if (isMail) {
    body.email = body.email.toLowerCase();
  }
  User.findOne({
    $or: [
      { username: body.email },
      { email: body.email },
    ]
  }).lean().then(oldUser => {
    if (oldUser) {
      // console.log(oldUser);
      const isCorrect = bcrypt.compareSync(body.password, oldUser.password);
      if (!oldUser.active) {
        return res
          .status(403)
          .json({ success: false, message: "Account not active" });
      }
      if (isCorrect) {
        let token = userToken(oldUser, body.remember);
        // console.log(req.session.id, 'from route');
        // return the JWT token for the future API calls
        return res.status(200).json({
          success: true,
          message: "Authentication successful!",
          token: token
        });
      } else {
        return res.status(403).json({
          success: false,
          message: "Incorrect Password entered"
        });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  });
};

const updateProfile = (req, res, next) => {
  if (checkValidation(req, res)) return;
  body = req.body;
  const updateJson = {
    username: body.username,
    firstName: body.firstName,
    lastName: body.lastName
  };
  body.email = body.email.toLowerCase();
  User.findOne({ email: body.email }).lean().then(oldUser => {
    if (oldUser) {
      console.log(oldUser);
      User.findOneAndUpdate({ email: body.email }, updateJson, { new: true }).lean().then(
        updatedUser => {
          return res
            .status(200)
            .json({
              success: true,
              message: "User details updated successfully.",
              data: updatedUser
            });
        },
        err => {
          return res.status(500).json({ success: false, message: err.message });
        }
      );
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  });
};

const storeNotif = (req, res, next) => {
  if (checkValidation(req, res)) return;
  const { userId } = req.params;
  if (userId === 'null' || userId === 'undefined') {
    return res.status(400).json({ success: false, message: 'UserId cannot be null/empty' });
  }
  User.findByIdAndUpdate(userId, { notificationSub: req.body.data }, { new: true }).lean().then((updated) => {
    console.log(updated);
    return res.status(200).json({
      success: true,
      message: "Notification sub stored in user successfully.",
      updated
    });
  }, err => {
    console.log(err);
    return res.status(400).json({ success: false, message: err.message });
  });
};

module.exports = {
  getUsers,
  checkUserName,
  searchUser,
  getUserDetails,
  getByUsername,
  registerUser,
  authUser,
  updateProfile,
  storeNotif
};
