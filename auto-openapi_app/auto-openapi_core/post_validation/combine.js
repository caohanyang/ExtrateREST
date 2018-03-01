const fs = require('fs');
var path = require('path');
const args = process.argv;

// get open api file
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

// 1. make sure it contains host && schema

if (openapi1.host && openapi1.schemes && openapi1.paths) {
	console.log("=========Validate host and schemes=============");
	// 2. delete path with begins with https

	console.log(openapi2);

	writeFinalFile();
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