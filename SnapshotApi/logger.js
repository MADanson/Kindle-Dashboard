const fs = require("fs");

function temperature(temp) {
  const unix = new Date();
  const time = `${unix.getHours()}:${
    unix.getMinutes() < 10 ? "0" + unix.getMinutes() : unix.getMinutes()
  }`;
  const data = `${time},${temp},`;
  fs.appendFile(`./daily/temp.csv`, data, (err) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });
}
function getTemperature(){
  var data = fs.readFileSync('./daily/temp.csv','utf8')
  return data
}

module.exports = { temperature, getTemperature };
