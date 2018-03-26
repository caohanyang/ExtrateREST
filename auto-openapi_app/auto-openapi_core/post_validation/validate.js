var curl = require('curlrequest');
var async = require('async');
const fs = require('fs');
var path = require('path');
const args = process.argv;
var isJSON = require('is-json');
var each = require('async-each-series');
var util = require('util');
var exec = require('child_process').exec;

var API_NAME, CompareSet_PATH;
var APIKEYNAME, APIKEYVALUE, APIKEYNAMEPASS, APIKEYVALUEPASS;

readConsole();

const configuration = fs.readFileSync(CompareSet_PATH + "/" + API_NAME + ".config").toString();

readAuth();


const openAPI = require(CompareSet_PATH + "/OpenAPI.json");
var baseUrl 
if (openAPI.basePath) {
	baseUrl = openAPI.schemes[0] + "://" + openAPI.host + openAPI.basePath;
} else {
	baseUrl = openAPI.schemes[0] + "://" + openAPI.host;
}

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
                var postbody;
				console.log("----------Verb part------------");
				console.log(verbKey);

				if (verbObj[verbKey].hasOwnProperty('parameters')) {
					paraObj = verbObj[verbKey]['parameters'];
				};
				if (verbObj[verbKey].hasOwnProperty('request')) {
					reqObj = verbObj[verbKey]['request'];
				};
				if (verbObj[verbKey].hasOwnProperty('responses')) {
					resObj = verbObj[verbKey]['responses'];
				};
				console.log("----------req part------------");
				console.log(reqObj);
				
				if (reqObj !== undefined) {
					if (reqObj.startsWith('http')) {
						composeUrl = reqObj;
						composeUrl = replaceAuth(composeUrl, oUrl);
					} else if (reqObj.startsWith('/')) {
						if (oUrl.includes("?")) {
							composeUrl = oUrl.split("?")[0] + '?' + reqObj.split("?")[1]
							composeUrl = replaceAuth(composeUrl, oUrl);
						}
					} else if (reqObj.startsWith('{') | reqObj.startsWith('[')) {
						composeUrl = replaceAuth(composeUrl, oUrl);
						postbody = reqObj;
					} else if (reqObj.startsWith('curl')) {
						composeUrl = reqObj;
						composeUrl = replaceAuthCurl(composeUrl);
					}
				} else {
					composeUrl = replaceAuth(composeUrl, oUrl);
				}
				console.log("-------composeUrl-----------");
				console.log(composeUrl);

				if (!composeUrl.startsWith('curl')) {
					var options;
					if (verbKey.includes("POST") && postbody!==null) {
						options = { url: composeUrl, method: verbKey, data: postbody, headers: {"Content-Type": "application/json"}, include: true };
					} else {
						options = { url: composeUrl, method: verbKey, include: true };
					}
				
					curl.request(options, function (err, parts) {
						var full = parts;
						var statusCode;
						console.log("---------full-----------");
						console.log(full);
						if (typeof full == 'undefined' || !full) {
							
							statusCode = "404";
						} else {
							parts = parts.split('\r\n');
							var data = parts.pop()
								, head = parts.pop();
	
							console.log("---------data-----------");
							console.log(data);
							console.log("---------head-----------");
							if (head.length === 0) {
								head = parts;
							}
							console.log(head);
	
							statusCode = getStatusCode(head);
	
						}

						var realResponse = {};
						realResponse[statusCode] = data;

						openAPI.paths[urlKey][verbKey]["realresponses"] = realResponse;
						next();
						
					});
				} else {
					child = exec(composeUrl, function (error, stdout, stderr) {
						var data;
						console.log('stdout: ' + stdout);

						if (stdout.includes('error')) {
							statusCode = "404";
						} else {
							statusCode = "200";
						}
						data = stdout

						if (error !== null) {
							console.log('exec error: ' + error);
							statusCode = "404";
							data = error.message;
						}

						var realResponse = {};
						realResponse[statusCode] = data;

						openAPI.paths[urlKey][verbKey]["realresponses"] = realResponse;
						next();

					});


				}
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


function getStatusCode(parts) {
	var statusCode = parts[0].split(' ')[1];
	console.log(statusCode);
	return statusCode;
}


function replaceAuthCurl(composeUrl) {
	if (APIKEYNAME===undefined) return composeUrl;

	if (composeUrl.includes(APIKEYNAME)) {

		if (APIKEYNAME.includes("username")) {
			composeUrl = composeUrl.replace(APIKEYNAME, APIKEYVALUE);
			composeUrl = composeUrl.replace(APIKEYNAMEPASS, APIKEYVALUEPASS);
		} else {
			composeUrl = composeUrl.replace(APIKEYNAME, APIKEYVALUE);
		}
		
	}

	return composeUrl;
}

function replaceAuth(composeUrl, oUrl) {

	if (APIKEYNAME===undefined) return composeUrl;
   
	if (APIKEYNAME.includes("|")) {
		var arrAPIKEYNAME =  APIKEYNAME.split("|");
		for (let i =0;i <arrAPIKEYNAME.length; i++) {
			if (composeUrl.includes(arrAPIKEYNAME[i])) {
				var realvalue = composeUrl.substring(composeUrl.indexOf(arrAPIKEYNAME[i]))
				if (realvalue.includes('&')) {
					realvalue = realvalue.split('&')[0].split('=')[1]
				} else {
					realvalue = realvalue.split('=')[1]
				}
		
				composeUrl = composeUrl.replace(realvalue, APIKEYVALUE);
				return composeUrl;
			}
		}
	} else {
		if (composeUrl.includes(APIKEYNAME)) {
			
					var realvalue = composeUrl.substring(composeUrl.indexOf(APIKEYNAME))
					if (realvalue.includes('&')) {
						realvalue = realvalue.split('&')[0].split('=')[1]
					} else {
						realvalue = realvalue.split('=')[1]
					}
			
					composeUrl = composeUrl.replace(realvalue, APIKEYVALUE);
		} else {
			if (composeUrl.includes('&')) {
				composeUrl = composeUrl + "&"+ APIKEYNAME + '=' + APIKEYVALUE;
			} else {
				composeUrl = composeUrl + "?"+ APIKEYNAME + '=' + APIKEYVALUE;
			}
			
		}
	}
	

	return composeUrl;
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
	if (configuration.indexOf("APIKEYNAMEPASS") != -1) {
		APIKEYNAMEPASS = configuration.substring(configuration.indexOf("APIKEYNAMEPASS")).split('\n')[0].split('=')[1];
		console.log(APIKEYNAMEPASS);
	}
	if (configuration.indexOf("APIKEYVALUEPASS") != -1) {
		APIKEYVALUEPASS = configuration.substring(configuration.indexOf("APIKEYVALUEPASS")).split('\n')[0].split('=')[1];
		console.log(APIKEYVALUEPASS);
	}
}