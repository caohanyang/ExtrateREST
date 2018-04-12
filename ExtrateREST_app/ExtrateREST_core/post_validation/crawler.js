const Nightmare = require('nightmare');
const nightmare = new Nightmare({ show: true });
const fs = require("fs");

nightmare
  .goto('https://rms.api.bbc.co.uk/docs/')
  .wait(5000)
  // .html("current.html", 'HTMLComplete')
  // .end()
  .evaluate(function(){

    // return new XMLSerializer().serializeToString(document);
    return document.documentElement.innerHTML
  })
  .then((result)=>{
    console.log(result);
    fs.writeFileSync("d.html", result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });

// var webdriverio = require('webdriverio');
// var options = {
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// };

// webdriverio
//     .remote(options)
//     .init()
//     .url('http://www.google.com')
//     .getTitle().then(function(title) {
//         console.log('Title was: ' + title);
//     })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });