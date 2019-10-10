const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get("/", (req, res) => {
   res.json("Hello World");
})

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Magic is happening on PORT: ${port}`));