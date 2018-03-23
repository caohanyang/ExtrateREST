var curl = require('curlrequest');
var async = require('async');
const fs = require('fs');
var path = require('path');
const args = process.argv;
var isJSON = require('is-json');
var each = require('async-each-series');

var API_NAME, CompareSet_PATH;
var APIKEYNAME, APIKEYVALUE;

readConsole();

const configuration = fs.readFileSync(CompareSet_PATH + "/" + API_NAME + ".config").toString();

readAuth();


const openAPI = require(CompareSet_PATH + "/OpenAPI.json");
var baseUrl = openAPI.schemes[0] + "://" + openAPI.host + openAPI.basePath;
// var baseUrl = openAPI.schemes[0]+ "://" + openAPI.host + openAPI.basePath;
var pathObj = openAPI.paths;
console.log(pathObj);
console.log("Total path :" + Object.keys(pathObj).length);


each(Object.keys(pathObj), function (urlKey, next) {
	if (pathObj.hasOwnProperty(urlKey)) {
		var oUrl;
		if (urlKey.startsWith('http')) {
			oUrl = urlKey;
		} else {
			oUrl = baseUrl + urlKey;
		}

		console.log("----------URL part------------");
		console.log(oUrl);

		var verbObj = openAPI.paths[urlKey]

		each(Object.keys(verbObj), function (verbKey, next) {
			setTimeout(() => {
				// Verb part
				var paraObj, reqObj, resObj;
				var composeUrl = oUrl;

				console.log("----------Verb part------------");
				if (verbObj[verbKey].hasOwnProperty('parameters')) {
					paraObj = verbObj[verbKey]['parameters'];
				};
				if (verbObj[verbKey].hasOwnProperty('request')) {
					reqObj = verbObj[verbKey]['request'];
				};
				if (verbObj[verbKey].hasOwnProperty('responses')) {
					resObj = verbObj[verbKey]['responses'];
				};

				console.log(reqObj);
				console.log(urlKey);
				if (reqObj !== undefined) {
					if (reqObj.startsWith('http')) {
						composeUrl = reqObj;
					} else if (reqObj.startsWith('/')) {
						if (oUrl.includes("?")) {
							composeUrl = oUrl.split("?")[0] + '?' + reqObj.split("?")[1]
						}

					}
				}

				console.log(composeUrl);
				if (composeUrl.includes(APIKEYNAME)) {

					var realvalue = composeUrl.substring(composeUrl.indexOf(APIKEYNAME))
					if (realvalue.includes('&')) {
						realvalue = realvalue.split('&')[0].split('=')[1]
					} else {
						realvalue = realvalue.split('=')[1]
					}

					composeUrl = composeUrl.replace(realvalue, APIKEYVALUE);
				} else {
					composeUrl = oUrl + "?" + APIKEYNAME + "=" + APIKEYVALUE;
				}

				console.log(composeUrl);


				var options = { url: composeUrl, method: verbKey, include: true };


				curl.request(options, function (err, parts) {
					var full = parts;

					parts = parts.split('\r\n');
					var data = parts.pop()
						, head = parts.pop();

					console.log("---------data-----------");
					// console.log(data);
					console.log("---------head-----------");
					if (head.length === 0) {
						head = parts;
					}
					console.log(head);

					var statusCode = getStatusCode(head);

					var realResponse = {};
					realResponse[statusCode] = data;

					openAPI.paths[urlKey][verbKey]["realresponses"] = realResponse;
					next();
				});

			}, 1000);
		}, function (err) {
			console.log("finished one loop")
			next();
		})

	}

}, function (err) {
	console.log('fininshed all')
	fs.writeFileSync(CompareSet_PATH + "/OpenAPI_Validation.json", JSON.stringify(openAPI, null, 2), 'utf8');
})



console.log("---------startwrite-------");




function getStatusCode(parts) {
	var statusCode = parts[0].split(' ')[1];
	console.log(statusCode);
	return statusCode;
}



function readConsole() {
	if (args.length > 0) {
		API_NAME = args[2].split("//")[1].split("\.")[1];
		console.log(API_NAME);
		if (API_NAME.includes("google")) {
			API_NAME = args[2].split("//")[1].split("/")[1];
		} else if (API_NAME.includes("/")) {
			if (!args[2].split("//")[1].startsWith("www") && !args[2].split("//")[1].startsWith("api")) {
				API_NAME = args[2].split("//")[1].split("\.")[0];
			}
		}
		CompareSet_PATH = "../CompareSet/" + API_NAME;
	}
}

function readAuth() {
	if (configuration.indexOf("APIKEYNAME") != -1) {
		APIKEYNAME = configuration.substring(configuration.indexOf("APIKEYNAME")).split('\n')[0].split('=')[1];
		console.log(APIKEYNAME);
	}
	if (configuration.indexOf("APIKEYVALUE") != -1) {
		APIKEYVALUE = configuration.substring(configuration.indexOf("APIKEYVALUE")).split('\n')[0].split('=')[1];
		console.log(APIKEYVALUE);
	}
}