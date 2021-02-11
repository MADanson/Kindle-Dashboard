const puppeteer = require("puppeteer");
const fs = require("fs");

async function take(path, width, height, name) {
  //Create Browser
  const browser = await puppeteer.launch({headless : false});
  //Create new page
  const page = await browser.newPage();
  //Set view size
  await page.setViewport({ width: width, height: height });
  // Go to file
  await page.goto(process.env.BASE + path);
  await page.waitForSelector('.done');
  await page.screenshot({ path: `./temp/${name}.png` });
  //Stop browser
  await browser.close();
}

async function retrive(name) {
  const screenshot = fs.readFileSync(`./temp/${name}.png`);
  return {
    status: 200,
    header: {
      "Content-Type": "image/png",
      "Content-Length": screenshot.length,
    },
    img: screenshot,
  };
  
}
function getName(path){
    return path.split(".")[0].toString();
}

module.exports = {take, retrive, getName}