//Imports
const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const dotenv = require("dotenv");
const screenshot = require("./screenshot");
const build = require("./builder");
const logger = require("./logger");

//Middleware config
const app = express();

dotenv.config();
app.use(cors());
app.use(volleyball);
app.use(express.json());

app.get("/main", async function (req, res) {
  const html = build.boilerplate("Farts", ["dateTime()", "weather()"]);
  setTimeout(function () {
    res.send(html);
  }, 10000);
});
app.get("/temp/:file", async function (req, res) {
  const image = await screenshot.retrive(req.params.file, res);
  res.writeHead(await image.status, await image.header);
  res.end(await image.img);
});

app.post("/push/temp", async function (req, res) {
  logger.temperature(req.body.temp)
  res.sendStatus(200)
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
