package som.apidiscoverer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;

import som.apidiscoverer.bean.DiscovererBean;
import som.apidiscoverer.model.APIRequest;
import som.apidiscoverer.model.HttpMethod;
import som.apidiscoverer.model.JSONAPICallExample;
import som.apidiscoverer.model.UppercaseEnumAdapter;

public class Integration {
	private static String API_NAME = "behance";
	private static String APIKEY_NAME = null;
	private static String APIKEY_VALUE = null;

	private static String Discoverset_PATH = "../../DiscoverSet/" + API_NAME;
	private static String CompareSet_PATH = "../../CompareSet/" + API_NAME;
	private static String pre_PATH = Discoverset_PATH + "/discover.json";
	private static String after_PATH = Discoverset_PATH + "/openapi.json";

	private static String discoverJson;
	private static String openapiJson;

	private static Gson gson;

	public static void main(String[] args) throws Exception {

		// 0. get property
		if (args.length > 0) {
			API_NAME = args[0].split("//")[1].split("\\.")[1];
			// google have several APIs
			if (API_NAME.contains("google")) {
				API_NAME = args[0].split("//")[1].split("/")[1];
			} else if (API_NAME.contains("/")) {
				if (!args[0].split("//")[1].startsWith("www") && !args[0].split("//")[1].startsWith("api")) {
					API_NAME = args[0].split("//")[1].split("\\.")[0];
				}
			}

			Discoverset_PATH = "../../DiscoverSet/" + API_NAME;
			CompareSet_PATH = "../../CompareSet/" + API_NAME;
			pre_PATH = Discoverset_PATH + "/discover.json";
			after_PATH = Discoverset_PATH + "/openapi.json";
		}	
		getPropertiesReader(CompareSet_PATH + "/" + API_NAME);

		// 1. read request/response examples
		String discoverStr = null;
		File f = new File(Discoverset_PATH);
		if (f.exists()) {
			InputStream is = new FileInputStream(pre_PATH);
			discoverStr = IOUtils.toString(is, "UTF-8");
		}

		// 2. init apidiscover
		GsonBuilder builder = new GsonBuilder().setPrettyPrinting();
		builder.registerTypeAdapter(HttpMethod.class, new UppercaseEnumAdapter());
		gson = builder.create();
		DiscovererBean apidiscover = new DiscovererBean();
		apidiscover.init();

		// 3. multiply record
		JSONArray discoverJson = new JSONArray(discoverStr);

		System.out.println(discoverJson.length());
		for (int i = 0; i < discoverJson.length(); i++) {
			JSONObject singleCall = discoverJson.getJSONObject(i);

			// 4. Authentication: changle id
			String authString = callAuth(singleCall.toString());
			apidiscover.setRowJsonCallExample(authString);

			JSONAPICallExample jsonCallExample = gson.fromJson(apidiscover.getRowJsonCallExample(),
					JSONAPICallExample.class);
			apidiscover.setJsonCallExample(jsonCallExample);
			
			// 5. Sending request
			if (jsonCallExample.getJsonRequest().getUrl()!= null) {
				// request example exist: send request
				apidiscover.sendRequest();
				// Wait 1 seconds
				TimeUnit.SECONDS.sleep(1);
				// refresh to get newest state 
				jsonCallExample = apidiscover.getJsonCallExample();
				
			} else {
				// request example miss: 
				// use origin url
				jsonCallExample.getJsonRequest().setUrl(jsonCallExample.getJsonRequest().getOurl());
			}
			
			
			
			// 6. Get Schema
			if (jsonCallExample.getJsonResponse().getBody().length()==0) {
				// use extracted response
				jsonCallExample.getJsonResponse().setBody(jsonCallExample.getJsonResponse().getEbody());
				
    		}
			
			
			if (jsonCallExample.getJsonResponse().getBody().length()!=0) {
				apidiscover.setJsonCallExample(jsonCallExample);
				apidiscover.discover();
			}
			
			
		}

		// prepare for the final openapi
		apidiscover.prepDownload();
		setOpenapiJson(apidiscover.getOpenapi());

		// write openapi to file
		writeOpenapi();
	}

	private static String callAuth(String singleCall) {
		// Authentication for the call
		// method 1: replace client_id/api_key
		String toBeReplace = null;
		if (APIKEY_NAME!=null && singleCall.contains(APIKEY_NAME)) {
			toBeReplace = singleCall.substring(singleCall.lastIndexOf(APIKEY_NAME) + APIKEY_NAME.length());
			//should be equal "="
			if (toBeReplace.startsWith("=")) {
				toBeReplace = toBeReplace.substring(1).trim().split("\"")[0];
			    //replace api-key
				singleCall=singleCall.replace(toBeReplace, APIKEY_VALUE);
			}
		}
		
		return singleCall;
	}

	// get property file
	public static void getPropertiesReader(String api) {

		Properties properties = new Properties();

		try {
			FileInputStream fis = new FileInputStream(api + ".config");
			properties.load(fis);

			setAPIKEY_NAME(properties.getProperty("APIKEYNAME"));
			setAPIKEY_VALUE(properties.getProperty("APIKEYVALUE"));

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private static void writeOpenapi() throws IOException {
		FileWriter fileWriter = new FileWriter(after_PATH);
		JsonParser parser = new JsonParser();
		JsonElement jelement = parser.parse(getOpenapiJson());

		Gson gson = new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create();
		String prettyJson = gson.toJson(jelement);

		fileWriter.write(prettyJson);
		fileWriter.close();

	}

	public static String getDiscoverJson() {
		return discoverJson;
	}

	public static void setDiscoverJson(String discoverJson) {
		Integration.discoverJson = discoverJson;
	}

	public static String getOpenapiJson() {
		return openapiJson;
	}

	public static void setOpenapiJson(String openapiJson) {
		Integration.openapiJson = openapiJson;
	}

	public static String getAPIKEY_NAME() {
		return APIKEY_NAME;
	}

	public static void setAPIKEY_NAME(String aPIKEY_NAME) {
		APIKEY_NAME = aPIKEY_NAME;
	}

	public static String getAPIKEY_VALUE() {
		return APIKEY_VALUE;
	}

	public static void setAPIKEY_VALUE(String aPIKEY_VALUE) {
		APIKEY_VALUE = aPIKEY_VALUE;
	}
}
