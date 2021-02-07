//Imports
const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const dotenv = require("dotenv");
const screenshot = require("./screenshot");
const build = require("./builder");

//Middleware config
const app = express();

dotenv.config();
app.use(cors());
app.use(volleyball);

app.get("/main", async function (req, res) {
  const html = build.boilerplate("Farts", [`h1('Cunt')`, `h2('H2 CUNT')`, `h3('h3 boyo', 'comic sans')`]);
  res.send(html);
});
app.get("/temp/:file", async function (req, res) {
  res.send(screenshot.retrive(req.params.file, res));
});



app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
