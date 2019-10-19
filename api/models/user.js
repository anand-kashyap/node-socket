const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = Schema({otp: String, createdDate: {type: Date, default: Date.now()}});

const userSchema = Schema({
  username: { type: String, unique: true, default: '' },
  firstName: {type: String, required: true},
  lastName: String,
  isAdmin: {type: Boolean, default: false},
  session: String,
  email: { type: String, unique: true, required: true },
  phone: String,
  resetToken: String,
  isResetTokenUsed: Boolean,
  imageUrl: String,
  active: Boolean,
  password: String,
  isVerified: {type: Boolean, default: false},
  otps: [otpSchema],
  lastVerified: {type: Date, default: null}
}, {
  toObject: {
      virtuals: true
  },
  toJSON: {
      virtuals: true
  }
});

userSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

const User = mongoose.model('users', userSchema);

module.exports = {
  User
}