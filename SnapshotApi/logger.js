const fs = require("fs");

function temperature(temp) {
  const unix = new Date();
  const date = `${unix.getDate()}.${unix.getMonth() + 1}.${unix.getFullYear()}`;
  const time = `${unix.getHours()}:${
    unix.getMinutes() < 10 ? "0" + unix.getMinutes() : unix.getMinutes()
  }`;
  const data = `\n ${date}, ${time}, ${temp}`;
  fs.appendFile(`./daily/temp.csv`, data, (err) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });
}

module.exports = { temperature };
