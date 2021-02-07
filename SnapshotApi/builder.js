const fs = require("fs");

function boilerplate(title, children) {
  var main = [];
  var opening = `<!DOCTYPE html><html><head><title>${title}</title></head><body>`;
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
}

function classCheck(clarse) {
  if (clarse === undefined || clarse === null) {
    return "";
  } else {
    return clarse;
  }
}
module.exports = { boilerplate };
