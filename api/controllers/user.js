const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mail = require("../../services/sendmail");
const checkValidation = require("../../services/expressValidation");

const userModel = require("../models/user");

const getUsers = (req, res, next) => {
  return res.status(200).json({ users: "test" });
  /* User = userModel.User;
  User.find({isAdmin: false}).then((users) => {
    console.log(users);
    return res.status(200).json(users);
  }, err => {
    console.log(err);
    return res.status(400).json(err.message);
  }); */
};

const userToken = oldUser => {
  let payload = {
    email: oldUser.email,
    fullName: oldUser.fullName,
    isAdmin: oldUser.isAdmin,
    active: oldUser.active,
    priceGroup: oldUser.priceGroup,
    isVerified: oldUser.isVerified
  };
  let token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h" // expires in 24 hours 24h
  });
  return token;
};

const registerUser = (req, res, next) => {
  if (checkValidation(req, res)) return;
  body = req.body;
  User = userModel.User;
  User.findOne({ email: body.email }).then(oldUser => {
    if (!oldUser) {
      const hashPassword = bcrypt.hashSync(body.password, process.env.salt);
      if (!body.hasOwnProperty("isAdmin")) {
        body.isAdmin = false;
      }

      newUser = new userModel.User({
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
      newUser.save().then((newUserDoc, err) => {
        if (err) {
          console.log(err);
        }
        console.log(newUserDoc.email);
        mail.sendWelcomeMail(newUserDoc.email, function(err, info) {
          if (err) return next(err);
          console.log("info from mail");
          console.log(info);
          const token = userToken(newUserDoc);
          return res
            .status(201)
            .send({
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
  User = userModel.User;
  User.findOne({ email: body.email }).then(oldUser => {
    if (oldUser) {
      console.log(oldUser);
      const isCorrect = bcrypt.compareSync(body.password, oldUser.password);
      if (!oldUser.active) {
        return res
          .status(403)
          .json({ success: false, message: "Account not active" });
      }
      if (isCorrect) {
        let token = userToken(oldUser);
        // return the JWT token for the future API calls
        return res.status(200).json({
          success: true,
          message: "Authentication successful!",
          token: token
        });
      } else {
        return res
          .status(403)
          .json({
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

const generateOTP = () => {
  // Declare a digits variable
  // which stores all digits
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

const forgotPassword = (req, res, next) => {
  if (checkValidation(req, res)) return;
  user = userModel.User;
  user.findOne({ email: req.body.email }).then(
    userDoc => {
      if (userDoc) {
        const someCode = generateOTP();
        const payload = {
          email: req.body.email,
          otp: someCode
        };
        const token = jwt.sign(payload, "secretkey", {
          expiresIn: "10m"
        });
        mail.sendTokenForgotPassword(
          token,
          process.env.NODEMAILER_AUTH_USER,
          req.body.email,
          req.body.baseUrl,
          function(err, info) {
            if (err) return next(err);
            if (info) {
              user
                .findOneAndUpdate(
                  { email: userDoc.email },
                  { resetToken: token, isResetTokenUsed: false },
                  { new: true }
                )
                .then(doc => {
                  res.status(200).json({
                    success: true,
                    message: "A reset password link is sent to your mail"
                  });
                });
            }
          }
        );
      } else {
        res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
    },
    err => {
      console.log(err);
      return next(err);
    }
  );
};

const isRecentOTP = (otpArr, recOtp, minutes = 2) => {
  const f = otpArr.find(aOtp => aOtp.otp === recOtp); 
  if (f) {
  const diff =
    (new Date().getTime() - f.createdDate.getTime()) / (1000 * 60);
    return diff <= minutes ? true : false;
  } else {
    return false;
  }
};

const convertToMs = (val, unit = 'h') => {
  if (unit === "s") {
    return val * 1000;
  } else if (unit === "m") {
    return val * 60 * 1000;
  } else if (unit === "h") {
    return val * 60 * 60 * 1000;
  }
};

const emptyOtps = (email) => {
  console.log('timer started');
  setTimeout(() => {
    user = userModel.User;
    return user.findOneAndUpdate({ email }, {otps: []}).then(res => {
      console.log('cleared array');
    });
  }, convertToMs(24));  
};

const sendOtp = (req, res, next) => {
  if (checkValidation(req, res)) return;
  // console.log('sendOtp');
  user = userModel.User;
  user.findOne({ email: req.body.email }).then(
    userDoc => {
      if (userDoc) {
        if (
          userDoc.otps.length >=3
        ) {
          return res.status(400).json({
            success: false,
            message: "Max number(3) of OTPs sent. Please try again after 24 hours."
          });
        }
        const otp = generateOTP();
        mail.sendVerifyOTP(otp, req.body.email, function (err, info) {
        if (err) return next(err);
        if (info) {   
        user.findOneAndUpdate(
            { email: userDoc.email },
            { $push: {otps: {otp}} },
            { new: true }
          )
          .then(doc => {
            if (doc.otps.length === 3) {
              emptyOtps(req.body.email);
            }
            return res.status(200).json({
              otp: doc.otps[doc.otps.length-1].otp,
              success: true,
              attempt: doc.otps.length,
              message: `An OTP has been sent to your mail. Attempt ${doc.otps.length}.`
            });
            });
          } 
      });  
      } else {
        res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
    },
    err => {
      console.log(err);
      return next(err);
    }
  );
};

const confirmOtp = (req, res, next) => {
  if (checkValidation(req, res)) return;
  user = userModel.User;
  user.findOne({ email: req.body.email }).then(
    userDoc => {
      if (userDoc) {
        if (
          isRecentOTP(userDoc.otps, req.body.otp, 15)
        ) {
          user.findOneAndUpdate(
            { email: userDoc.email },
            { otps: [], lastVerified: Date.now(), isVerified: true },
            { new: true }
          )
          .then(doc => {
            return res.status(200).json({
              success: true,
              message: "OTP correct. Account verified!"
            });
          }); 
        } else {
          return res.status(401).json({
            success: false,
            message: "OTP incorrect/expired. Please generate a new one or recheck."
          });
        }
      } else {
        res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
    },
    err => {
      console.log(err);
      return next(err);
    }
  );
};

const resetPassword = (req, res, next) => {
  if (checkValidation(req, res)) return;
  user = userModel.User;
  query = user.findOne({ email: req.body.email });
  query.exec(function(err, userDoc) {
    if (err) {
      return next(err);
    }
    if (req.body.token !== userDoc.resetToken || userDoc.isResetTokenUsed) {
      return res
        .status(406)
        .json({ success: false, message: `Invalid Reset Link.` });
    }
    if (userDoc) {
      const hashPassword = bcrypt.hashSync(req.body.password, process.env.salt);
      user
        .findOneAndUpdate(
          { email: userDoc.email },
          { password: hashPassword, isResetTokenUsed: true },
          { new: true }
        )
        .then(
          doc => {
            console.log(doc);
            return res
              .status(200)
              .json({
                success: true,
                message: "password successfully updated"
              });
          },
          err => {
            console.log(err);
            return next(err);
          }
        );
    } else {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
  });
};

const updatePassword = (req, res, next) => {
  if (checkValidation(req, res)) return;
  body = req.body;
  User = userModel.User;
  User.findOne({ email: body.email }).then(oldUser => {
    if (oldUser) {
      console.log(oldUser);
      const isCorrect = bcrypt.compareSync(body.password, oldUser.password);
      if (!oldUser.active) {
        return res
          .status(403)
          .json({ success: false, message: "Account not active" });
      }
      if (isCorrect) {
        const hashPassword = bcrypt.hashSync(
          req.body.newPassword,
          process.env.salt
        );
        User.findOneAndUpdate(
          { email: body.email },
          { password: hashPassword, isVerified: true },
          { new: true }
        ).then(
          doc => {
            return res
              .status(200)
              .json({
                success: true,
                message: "password updated successfully"
              });
          },
          err => {
            console.log(err);
            return next(err);
          }
        );
      } else {
        return res
          .status(403)
          .json({
            success: false,
            message: "Incorrect Email/Password entered"
          });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  });
};

module.exports = {
  getUsers,
  registerUser,
  authUser,
  forgotPassword,
  resetPassword,
  updatePassword,
  sendOtp,
  confirmOtp
};
