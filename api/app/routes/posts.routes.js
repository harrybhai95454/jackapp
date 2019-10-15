const routes = require("express").Router();
const {
  createPost,
  getAllPosts,
  deletePost,
  getOnePost
} = require("../controller/Posts");

routes.get("/", getAllPosts);

routes.get("/:id", getOnePost);

routes.post("/create", createPost);

routes.delete("/:id", deletePost);

module.exports = routes;
