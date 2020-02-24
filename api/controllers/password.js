const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const checkValidation = require("../../services/expressValidation");
const userModel = require("../models/user");
const mail = require("../../services/sendmail");

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
          req.body.email,
          process.env.ALLOWED_CORS_URL_PROD,
          function (err, info) {
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
      res.status(403).json({
        success: false,
        message: err.message
      });
      return next(err);
    }
  );
};

const isRecentOTP = (otpArr, recOtp, minutes = 2) => {
  const f = otpArr.find(aOtp => aOtp.otp === recOtp);
  if (f) {
    const diff = (new Date().getTime() - f.createdAt.getTime()) / (1000 * 60);
    return diff <= minutes ? true : false;
  } else {
    return false;
  }
};

const convertToMs = (val, unit = "h") => {
  if (unit === "s") {
    return val * 1000;
  } else if (unit === "m") {
    return val * 60 * 1000;
  } else if (unit === "h") {
    return val * 60 * 60 * 1000;
  }
};

const emptyOtps = email => {
  console.log("timer started");
  setTimeout(() => {
    user = userModel.User;
    return user.findOneAndUpdate({ email }, { otps: [] }).then(res => {
      console.log("cleared array");
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
        if (userDoc.otps.length >= 3) {
          return res.status(400).json({
            success: false,
            message:
              "Max number(3) of OTPs sent. Please try again after 24 hours."
          });
        }
        const otp = generateOTP();
        mail.sendVerifyOTP(otp, req.body.email, function (err, info) {
          if (err) return next(err);
          if (info) {
            user
              .findOneAndUpdate(
                { email: userDoc.email },
                { $push: { otps: { otp } } },
                { new: true }
              )
              .then(doc => {
                if (doc.otps.length === 3) {
                  emptyOtps(req.body.email);
                }
                return res.status(200).json({
                  otp: doc.otps[doc.otps.length - 1].otp,
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
        if (isRecentOTP(userDoc.otps, req.body.otp, 15)) {
          user
            .findOneAndUpdate(
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
            message:
              "OTP incorrect/expired. Please generate a new one or recheck."
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
  return jwt.verify(req.body.token, 'secretkey', (err, decoded) => {
    // Error handling
    if (err)
      return res.status(400).json({ success: false, message: err.message });
    if (!decoded.email) {
      return res
        .status(406)
        .json({ success: false, message: `Invalid Reset Link.` });
    }
    user = userModel.User;
    query = user.findOne({ email: decoded.email });
    query.exec(function (err, userDoc) {
      if (err) {
        return next(err);
      }
      if (userDoc) {
        if (userDoc.isResetTokenUsed) {
          return res
            .status(406)
            .json({ success: false, message: `Reset Token Used` });
        }
        const hashPassword = bcrypt.hashSync(
          req.body.password,
          process.env.salt
        );
        user
          .findOneAndUpdate(
            { email: userDoc.email },
            { password: hashPassword, isResetTokenUsed: true },
            { new: true }
          )
          .then(
            doc => {
              console.log(doc);
              return res.status(200).json({
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
            return res.status(200).json({
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
        return res.status(403).json({
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
  forgotPassword,
  resetPassword,
  updatePassword,
  sendOtp,
  confirmOtp
}