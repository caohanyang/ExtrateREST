const fs = require('fs');
var path = require('path');
const args = process.argv;
var API_NAME, CompareSet_PATH, DiscoverSet_PATH, FinalSet_PATH;

if (args.length > 0) {
	API_NAME = args[2].split("//")[1].split("\.")[1];
	console.log(API_NAME)
	// google have several APIs
	if (API_NAME.includes("google")) {
		API_NAME = args[2].split("//")[1].split("/")[1];
	}
	CompareSet_PATH = "../CompareSet/" + API_NAME;
	DiscoverSet_PATH = "../DiscoverSet/" + API_NAME;
	FinalSet_PATH = "../FinalSet/";
}

var API_PATH = FinalSet_PATH + API_NAME;
const openapi1 = require(CompareSet_PATH + "/OpenAPI.json");
const openapi2 = require(DiscoverSet_PATH + "/openapi.json");


combination();
writeFinalFile();



function combination() {
	if (openapi1.host && openapi1.schemes && openapi1.paths && openapi2.paths) {
		console.log("=========Validate host and schemes=============");
		console.log("path number openapi1 "+ Object.keys(openapi1.paths).length);
		console.log("path number openapi2 "+ Object.keys(openapi2.paths).length);
		Object.keys(openapi1.paths).forEach(function(url) {
			console.log(url);
	
			// combine responses
			if (hasOwnPropertyCaseInsensitive(openapi2.paths, url)) {
			   Object.keys(openapi1.paths[url]).forEach(function(verb) {
				   console.log(url + "  " + verb);
				  
				   if (hasOwnPropertyCaseInsensitive(openapi2.paths[url], verb)) {
					 let verbLower = verb.toLocaleLowerCase();
	
					 if (hasOwnPropertyCaseInsensitive(openapi1.paths[url][verb], 'responses')) {
						openapi1.paths[url][verb]['responses']['200']['schema'] = openapi2.paths[url][verbLower]['responses']['200']['schema'];
					 } else {
						openapi1.paths[url][verb]['responses'] = openapi2.paths[url][verbLower]['responses'];
					 }
				   } else {
					   console.log("Can't find same Verb");
				   }
	
			   })
			} else {
				console.log("Can't find same URL");
			}
	
			
			// Object.keys(openapi1.paths[url]).forEach(function(verb) {
			// 	// remove request example
			// 	if (hasOwnPropertyCaseInsensitive(openapi1.paths[url][verb], "request")) {
			// 		delete openapi1.paths[url][verb].request;
			// 	 } 
	
			// })
	
		})
	
		openapi1.definitions = openapi2.definitions;
	}


	//remove request in openapi1
	Object.keys(openapi1.paths).forEach(function(url) {
		Object.keys(openapi1.paths[url]).forEach(function(verb) {
			if (hasOwnPropertyCaseInsensitive(openapi1.paths[url][verb], "request")) {
				delete openapi1.paths[url][verb].request;
				} 
		})
	})

}

function writeFinalFile() {

	if (!fs.existsSync(FinalSet_PATH)) {
		fs.mkdirSync(FinalSet_PATH);
	}

	if(!fs.existsSync(API_PATH)) {
		fs.mkdirSync(API_PATH);
	}

	fs.writeFileSync(API_PATH + "/OpenAPI.json", JSON.stringify(openapi1, null, 2), 'utf8');
}

// Object.prototype.hasOwnPropertyCI = function(prop) {
// 	return Object.keys(this)
// 		   .filter(function (v) {
// 			  return v.toLowerCase() === prop.toLowerCase();
// 			}).length > 0;
//  };

//  Object.defineProperty("hasOwnPropertyCI", {
//     "enumerable": false,
//     "value": function(keyName) {
//         return (Object.keys(this).map(function(v){
//             return v.toUpperCase()
//         }).indexOf(keyName.toUpperCase()) > -1)
//     }
// });

function hasOwnPropertyCaseInsensitive(obj, property) {
    var props = [];
    for (var i in obj) if (obj.hasOwnProperty(i)) props.push(i);
    var prop;
    while (prop = props.pop()) if (prop.toLowerCase() === property.toLowerCase()) return true;
    return false;
}