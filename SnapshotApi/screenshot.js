const puppeteer = require("puppeteer");
const fs = require("fs");

async function take(path, size) {
  //Create Browser
  const browser = await puppeteer.launch();
  //Create new page
  const page = await browser.newPage();
  //Set view size
  await page.setViewport({ width: size, height: size });
  // Go to file
  await page.goto(process.env.BASE + path);
  //* await page.goto("https://hackaday.com/");
  //Take screenshot and save in temp folder
  await page.screenshot({ path: `./temp/${getName(path)}.png` });
  //Stop browser
  await browser.close();
}

function retrive(name, res) {
  const screenshot = fs.readFileSync(`./temp/${name}.png`);
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
function getName(path){
    return path.split(".")[0].toString();
}

module.exports = {take, retrive, getName}