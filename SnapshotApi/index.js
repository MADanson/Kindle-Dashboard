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

app.get("/main/:nodelay", async function (req, res) {
  const html = build.boilerplate("Farts", [`button("location.href='hi.html';", "Click Me!")`]);
  if(req.params.nodelay == "nodelay"){
    res.send(html);
  }else{
    setTimeout(function () {
      res.send(html);
    }, 10000);
  }
});
app.get("/page", async function (req, res) {

  const html = build.boilerplate("This is my site", ["h1('This is a heading')", `button('location.href="nextpage";', 'Click Me!')`])

  res.send(html);
});
app.get("/printer", async function (req,res) {
  screenshot.take(req.query.site, 2000, 400, "site", true);
  setTimeout(function () {
    res.json({data: `http://${process.env.IP}/temp/site`})
  }, 10000);
  
})
app.get("/temp/:file", async function (req, res) {
  const image = await screenshot.retrive(req.params.file, res);
  res.writeHead(await image.status, await image.header);
  res.end(await image.img);
});

app.post("/push/temp", async function (req, res) {
  logger.temperature(req.body.temp)
  res.sendStatus(200)
});
app.get("/get/temp", async function (req, res) {
  const data = {
    temps: logger.getTemperature()
  }
  res.send(data)
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
