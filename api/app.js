const express = require("express");
const app = express();

// Middleware

const cors = require("cors");
const bodyParser = require("body-parser");

const userValidator = require("./app/middleware/Validator");

const auth = require("./app/middleware/Auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes

const usersRoute = require("./app/routes/users.routes");
const postsRoute = require("./app/routes/posts.routes");

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.use("/users", userValidator("createUser"), usersRoute);
app.use("/posts", auth ,postsRoute);

// Database

require("./app/database/connect_db")();

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Magic is happening on PORT: ${port}`));
