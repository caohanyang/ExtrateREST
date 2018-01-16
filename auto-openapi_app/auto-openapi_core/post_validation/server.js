// const prerender = require("prerender");
// const server = prerender();
// server.start();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromURL("https://rms.api.bbc.co.uk/docs/").then(dom => {
    console.log(dom.serialize());
  });