const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      min: 3,
      max: 255,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: [6, "Weak Password"] },
    profilePic: {
      type: String,
      default:
        "https://assets.stickpng.com/images/5841c0bda6515b1e0ad75a9e.png",
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
