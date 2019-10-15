const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: 5,
      max: 100,
      required: false
    },
    content: {
      type: String,
      min: 5,
      max: 250,
      required: true
    },
    likes: {
      type: Number
    },
    likedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
