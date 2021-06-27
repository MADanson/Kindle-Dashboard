const screenshot = require("./screenshot");

function boilerplate(title, children) {
  var main = [];
  var opening = `<!DOCTYPE html><html><style>*{margin: 0;padding: 0;list-style: none;}</style><head><title>${title}</title></head><body>`;
  main.push(opening);

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    main.push(eval(child));
  }
  //Closing
  const closing = "</body></html>";
  main.push(closing);
  //Return html string
  return main.join("");
}

// ELEMENTS
function h1(text, groupOfKids) {
  const clarse = classCheck(groupOfKids);
  return `<h1 class="${clarse}">${text}</h1>`;
}
function h2(text, groupOfKids) {
  const clarse = classCheck(groupOfKids);
  return `<h2 class="${clarse}">${text}</h2>`;
}
function h3(text, groupOfKids) {
  const clarse = classCheck(groupOfKids);
  return `<h3 class="${clarse}">${text}</h3>`;
}
function div(children, groupOfKids) {
  const clarse = classCheck(groupOfKids);
  var main = [];
  main.push(`<div class="${clarse}">`)
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    main.push(eval(child));
  }
  main.push(`</div>`);
  return main.join("");
}
function img(src, groupOfKids, width, height) {
  const clarse = classCheck(groupOfKids)
  if (width === undefined && height === undefined) {
    return `<img class="${clarse}" src="${src}">`
  } else if (width == undefined) {
    return `<img class="${clarse}" src="${src}" height="${height}">`
  } else if (height == undefined) {
    return `<img class="${clarse}" src="${src}" width="${width}">`
  } else {
    return `<img class="${clarse}" src="${src}" width="${width}" height="${height}">`
  }
}

function a(href, text, groupOfKids){
  const clarse = classCheck(groupOfKids)
  return `<a href="${href}" class="${clarse}" >${text}</a>`
}

function button(onClick, text, groupOfKids){
  const clarse = classCheck(groupOfKids)
  return `<button type="button" onclick=${onClick}>${text}</button>`
}


// EXTERNAL SITES
function weather() {
  screenshot.take("./templates/Weather/weather.html", 600, 201, "weather");
  return `<img src='http://${process.env.IP}/temp/weather'/> `
}
function dateTime() {
  screenshot.take("./templates/TimeHeader/dateTime.html", 600, 60, "time");
  return `<img src='http://${process.env.IP}/temp/time'/> `
}


//Helper functions
function classCheck(clarse) {
  if (clarse === undefined || clarse === null) {
    return "";
  } else {
    return clarse;
  }
}
module.exports = { boilerplate };
