//Imports
const express = require("express");
const volleyball = require("volleyball");
var cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const puppeteer = require("puppeteer");
const execFile = require("child_process").execFile;
const fs = require("fs");

//Middleware config
const app = express();

dotenv.config();
app.use(cors());
app.use(volleyball);

app.get("/html", async function (req, res) {
  await takeScreenshot("test.html", 50);
  res.send(
    `<h1>Hello this is a test</h1><br><h2>This is actually a live genereated image of html</h2><br><img src='http://192.168.16.100:4000/temp/test'/>`
  );
});
app.get("/temp/:file", async function (req, res) {
  const sc = getFile(req.params.file, res);
});

async function takeScreenshot(path, size) {
  const pointer = path.split(".");
  const name = pointer[0].toString();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: size, height: size });
  // await page.goto(process.env.BASE+path);
  await page.goto("https://hackaday.com/");
  await page.screenshot({ path: `./temp/${name}.png` });

  await browser.close();
}
function getFile(name, res) {
  screenshot = fs.readFileSync(`./temp/${name}.png`);
  const sc = {
    status: 200,
    header: {
      "Content-Type": "image/png",
      "Content-Length": screenshot.length,
    },
    img: screenshot,
  };
  res.writeHead(sc.status, sc.header);
  res.end(sc.img);
}

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
