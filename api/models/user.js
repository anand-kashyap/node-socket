const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = Schema({ otp: String }, { timestamps: true });

const userSchema = Schema({
  username: { type: String },
  firstName: { type: String, required: true },
  lastName: String,
  notificationSub: { type: Schema.Types.Mixed, default: null }, // for storing push notify subscription
  isAdmin: { type: Boolean, default: false },
  session: String,
  lastSeen: { type: Date, default: null },
  email: { type: String, unique: true, required: true },
  phone: String,
  resetToken: String,
  isResetTokenUsed: Boolean,
  imageUrl: String,
  active: Boolean,
  password: String,
  isVerified: { type: Boolean, default: false },
  otps: [otpSchema],
  lastVerified: { type: Date, default: null }
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