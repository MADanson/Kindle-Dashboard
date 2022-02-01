const puppeteer = require("puppeteer");
const fs = require("fs");


async function take(path, width, height, name, forPrint=false) {
  //Create Browser
  const browser = await puppeteer.launch({headless : false});
  //Create new page
  const page = await browser.newPage();
  //Set view size
  await page.setViewport({ width: width, height: height });
  // Go to file
  await page.goto(path);
  setTimeout(function () {
  }, 3000);
  if(forPrint === true){
    await page.screenshot({ path: `./temp/${name}.jpg` });
  }else{
    await page.screenshot({ path: `./temp/${name}.jpg` });

  }
  //Stop browser
  await browser.close();
}

async function retrive(name) {
  var screenshot;
  if(name === "site"){
    screenshot = fs.readFileSync(`./temp/${name}.jpg`);
  }else{
    screenshot = fs.readFileSync(`./temp/${name}.jpg`);
  }
  return {
    status: 200,
    header: {
      "Content-Type": "image/jpg",
      "Content-Length": screenshot.length,
    },
    img: screenshot,
  };
  
}
function getName(path){
    return path.split(".")[0].toString();
}

module.exports = {take, retrive, getName}