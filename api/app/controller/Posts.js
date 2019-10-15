const PostModel = require("../models/Post.model");

exports.createPost = (req, res) => {
   res.json("Post created");
}

exports.getAllPosts = (req, res) => {
   res.json("All posts");
}

exports.deletePost = (req, res) => {
   res.json("Delete posts");
}

exports.getOnePost = (req, res) => {
   res.json("Delete another posts");
}