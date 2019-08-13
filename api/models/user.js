const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  // userId: { type: String, unique: true, required: true },
  firstName: {type: String, required: true},
  lastName: String,
  isAdmin: {type: Boolean, required: true},
  session: String,
  email: { type: String, unique: true, required: true },
  phone: String,
  resetToken: String,
  isResetTokenUsed: Boolean,
  imageUrl: String,
  active: Boolean,
  password: String,
  isVerified: Boolean,
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
  User: User
}