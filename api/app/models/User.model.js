const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 100,
    required: true
  },
  password: {
    type: String,
    min: 5,
    max: 250,
    required: true
  },
  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  likedPosts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
});

module.exports = mongoose.model("User", UserSchema);
