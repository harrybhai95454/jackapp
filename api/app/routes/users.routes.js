const routes = require("express").Router();
const { register, login, reset } = require("../controller/Users");

routes.post("/login", login);

routes.post("/reset", reset);

routes.post("/register", register);

module.exports = routes;
