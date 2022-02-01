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

app.get("/generate/:page/:nodelay", async function (req, res) {
  const html = new Page(req.params.page)
  if(req.params.nodelay == "nodelay"){
    res.send(html.generate());
  }else{
    setTimeout(function () {
      res.send(html.generate());
    }, 10000);
  }
});
app.get("/printSite", async function (req,res) {
  screenshot.take(req.query.site, 400, 2200, "site", true);
  setTimeout(function () {
    res.json({data: `http://${process.env.IP}/temp/site`})
  }, 10000);
  
})
app.get("/namehim", async function (req,res) {
  const image = await screenshot.retrive("namehim", res);
  res.writeHead(await image.status, await image.header);
  res.end(await image.img);
  
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
