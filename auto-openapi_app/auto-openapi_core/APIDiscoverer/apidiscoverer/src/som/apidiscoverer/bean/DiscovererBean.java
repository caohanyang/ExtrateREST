package som.apidiscoverer.bean;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.DefaultTreeNode;
import org.primefaces.model.TreeNode;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mashape.unirest.http.exceptions.UnirestException;
import core.Parameter;
import core.API;
import core.JSONDataType;
import core.Path;
import core.Schema;
import som.apidiscoverer.Discoverer;
import som.apidiscoverer.Generator;
import som.apidiscoverer.model.APIRequest;
import som.apidiscoverer.model.HttpMethod;
import som.apidiscoverer.model.JSONAPICallExample;
import som.apidiscoverer.model.JSONResponse;
import som.apidiscoverer.model.Response;
import som.apidiscoverer.model.TreeNodeEntry;
import som.apidiscoverer.util.JSONUtils;
import som.apidiscoverer.util.RESTClient;

@ManagedBean(name = "discovererBean")
@ViewScoped
public class DiscovererBean implements Serializable {
	private static final long serialVersionUID = 1L;
	private List<APIRequest> records;

	private APIRequest newAPIRequest;
	private Response response;
	private Discoverer discoverer;
	private DefaultStreamedContent download;
	private String openapi;
	private TreeNode apiTree;
	private JSONAPICallExample jsonCallExample;
	private String rowJsonCallExample;
	private String schemaName = "";
	private Gson gson;
	private String bodySchema = "";

	@PostConstruct
	public void init() {
		GsonBuilder builder = new GsonBuilder().setPrettyPrinting();
		gson = builder.create();
		jsonCallExample = new JSONAPICallExample();
		schemaName = "";
		setBodySchema("");
		newAPIRequest = new APIRequest();
		response = new Response();
		discoverer = new Discoverer();
		
		setRecords(new ArrayList<APIRequest>());
	}

	public void setDownload(DefaultStreamedContent download) {
		this.download = download;
	}

	public DefaultStreamedContent getDownload() throws Exception {
		return download;
	}

	public TreeNode createTreeTable() {
		API api = discoverer.getApi();

		TreeNode apiNode = new DefaultTreeNode(new TreeNodeEntry("OpenAPI", "-"), null);
		TreeNode hostNode = new DefaultTreeNode(new TreeNodeEntry("host", api.getHost()), apiNode);
		TreeNode basePathNode = new DefaultTreeNode(new TreeNodeEntry("basePath", api.getBasePath()), apiNode);

		// paths
		TreeNode pathsNode = new DefaultTreeNode(new TreeNodeEntry("paths", "-"), apiNode);
		for (Path path : api.getPaths()) {
			TreeNode pathNode = new DefaultTreeNode(new TreeNodeEntry(path.getPattern(), "-"), pathsNode);
			TreeNode operationsNode = new DefaultTreeNode(new TreeNodeEntry("operations", "-"), pathNode);
			if (path.getGet() != null) {

				TreeNode operationGetNode = new DefaultTreeNode(new TreeNodeEntry("get", "-"), operationsNode);
				TreeNode parametersNode = new DefaultTreeNode(new TreeNodeEntry("parameters", "-"), operationGetNode);
				for (Parameter parameter : path.getGet().getParameters()) {
					TreeNode parameterNode = new DefaultTreeNode(
							new TreeNodeEntry(parameter.getName(), parameter.getLocation().getLiteral()), parametersNode);
				}
				TreeNode responsesNode = new DefaultTreeNode(new TreeNodeEntry("responses", "-"), operationGetNode);
				for (core.Response response : path.getGet().getResponses()) {
					TreeNode responseNode = new DefaultTreeNode(new TreeNodeEntry(response.getCode(), "-"),
							responsesNode);
					if (response.getSchema() != null) {
						TreeNode schemaNode = new DefaultTreeNode(
								new TreeNodeEntry("schema", response.getSchema().getName()), responseNode);
						dispalaySchema(response.getSchema(), schemaNode);
					}

				}
			}
			if (path.getPost() != null) {
				TreeNode operationPostNode = new DefaultTreeNode(new TreeNodeEntry("post", "-"), operationsNode);
				TreeNode parametersNode = new DefaultTreeNode(new TreeNodeEntry("parameters", "-"), operationPostNode);
				for (Parameter parameter : path.getPost().getParameters()) {
					TreeNode parameterNode = new DefaultTreeNode(
							new TreeNodeEntry(parameter.getName(), parameter.getLocation().getLiteral()), parametersNode);
				}
				TreeNode responsesNode = new DefaultTreeNode(new TreeNodeEntry("responses", "-"), operationPostNode);
				for (core.Response response : path.getPost().getResponses()) {
					TreeNode responseNode = new DefaultTreeNode(new TreeNodeEntry(response.getCode(), "-"),
							responsesNode);
					// displayResponse(response,responseNode);
					if (response.getSchema() != null) {
						TreeNode schemaNode = new DefaultTreeNode(
								new TreeNodeEntry("schema", response.getSchema().getName()), responseNode);
						dispalaySchema(response.getSchema(), schemaNode);
					}

				}

			}
			if (path.getPut() != null) {
				TreeNode operationPutNode = new DefaultTreeNode(new TreeNodeEntry("put", "-"), operationsNode);
				TreeNode parametersNode = new DefaultTreeNode(new TreeNodeEntry("parameters", "-"), operationPutNode);
				for (Parameter parameter : path.getPut().getParameters()) {
					TreeNode parameterNode = new DefaultTreeNode(
							new TreeNodeEntry(parameter.getName(), parameter.getLocation().getLiteral()), parametersNode);
				}
				TreeNode responsesNode = new DefaultTreeNode(new TreeNodeEntry("responses", "-"), operationPutNode);
				for (core.Response response : path.getPut().getResponses()) {
					TreeNode responseNode = new DefaultTreeNode(new TreeNodeEntry(response.getCode(), "-"),
							responsesNode);
					if (response.getSchema() != null) {
						TreeNode schemaNode = new DefaultTreeNode(
								new TreeNodeEntry("schema", response.getSchema().getName()), responseNode);
						dispalaySchema(response.getSchema(), schemaNode);
					}

				}

			}
			if (path.getDelete() != null) {
				TreeNode operationDeletetNode = new DefaultTreeNode(new TreeNodeEntry("delete", "-"), operationsNode);
				TreeNode parametersNode = new DefaultTreeNode(new TreeNodeEntry("parameters", "-"),
						operationDeletetNode);
				for (Parameter parameter : path.getDelete().getParameters()) {
					TreeNode parameterNode = new DefaultTreeNode(
							new TreeNodeEntry(parameter.getName(), parameter.getLocation().getLiteral()), parametersNode);
				}
				TreeNode responsesNode = new DefaultTreeNode(new TreeNodeEntry("responses", "-"), operationDeletetNode);
				for (core.Response response : path.getDelete().getResponses()) {
					TreeNode responseNode = new DefaultTreeNode(new TreeNodeEntry(response.getCode(), "-"),
							responsesNode);
					if (response.getSchema() != null) {
						TreeNode schemaNode = new DefaultTreeNode(
								new TreeNodeEntry("schema", response.getSchema().getName()), responseNode);
						dispalaySchema(response.getSchema(), schemaNode);
					}

				}

			}

		}
		// definitions
		TreeNode definitionsNode = new DefaultTreeNode(new TreeNodeEntry("definitions", "-"), apiNode);
		for (Schema schema : api.getDefinitions()) {
			TreeNode schemaNode = new DefaultTreeNode(new TreeNodeEntry(schema.getName(), "-"), definitionsNode);
			dispalaySchema(schema, schemaNode);
		}
		return apiNode;

	}

	private void dispalaySchema(Schema schema, TreeNode schemaNode) {
		if (schema.getProperties() != null) {
			TreeNode propertiesNode = new DefaultTreeNode(new TreeNodeEntry("properties", "-"), schemaNode);

			for (Schema property : schema.getProperties()) {
				diplayProperty(property, propertiesNode);

			}
		}
		if (schema.getItems() != null) {
			TreeNode itemsNode = new DefaultTreeNode(new TreeNodeEntry("items", "-"), schemaNode);
			if (schema.getItems().getType().equals(JSONDataType.OBJECT)) {
				TreeNode itemNode = new DefaultTreeNode(new TreeNodeEntry(schema.getItems().getName(), "-"), itemsNode);
			} else {
				TreeNode itemNode = new DefaultTreeNode(
						new TreeNodeEntry(schema.getItems().getType().getLiteral(), "-"), itemsNode);

			}

		}
	}

	private void diplayProperty(Schema property, TreeNode propertiesNode) {
		if (property.getType().equals(JSONDataType.OBJECT)) {
			TreeNode propertyNode = new DefaultTreeNode(
					new TreeNodeEntry(property.getName(), property.getName()), propertiesNode);

		} else {
			if (property.getType().equals(JSONDataType.ARRAY)) {
				TreeNode arrayNode = new DefaultTreeNode(
						new TreeNodeEntry(property.getName(), JSONDataType.ARRAY.getLiteral()), propertiesNode);
				TreeNode itemsNode = new DefaultTreeNode(new TreeNodeEntry("items", "-"), arrayNode);
				if (property.getItems().getType().equals(JSONDataType.OBJECT)) {
					TreeNode itemNode = new DefaultTreeNode(new TreeNodeEntry(property.getItems().getName(), "-"),
							itemsNode);
				} else {
					TreeNode itemNode = new DefaultTreeNode(
							new TreeNodeEntry(property.getItems().getType().getLiteral(), "-"), itemsNode);

				}

			} else {
				TreeNode propertyNode = new DefaultTreeNode(
						new TreeNodeEntry(property.getName(), property.getType().getLiteral()), propertiesNode);

			}
		}

	}

	private void displayResponse(core.Response response, TreeNode responseNode) {
		if (response.getSchema() != null) {
			TreeNode schemaNode = new DefaultTreeNode(new TreeNodeEntry("schema", response.getSchema().getName()),
					responseNode);

			dispalaySchema(response.getSchema(), schemaNode);
		}
	}

	public void prepDownload() throws Exception {
		discoverer.mergePaths();
		File temp = File.createTempFile("swagger", ".json");
		FileWriter fileWritter = new FileWriter(temp.getPath(), true);
		BufferedWriter bufferWritter = new BufferedWriter(fileWritter);
		bufferWritter.write(gson.toJson(Generator.getJsonFromSwaggerModel(discoverer.getApiRoot())));
		System.out.println(gson.toJson(Generator.getJsonFromSwaggerModel(discoverer.getApiRoot())));
		setOpenapi(gson.toJson(Generator.getJsonFromSwaggerModel(discoverer.getApiRoot())));
		bufferWritter.close();
	    
//		InputStream input = new FileInputStream(temp);
//		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
//		setDownload(new DefaultStreamedContent(input, externalContext.getMimeType(temp.getName()), temp.getName()));
	}

	

	public void sendRequest() throws MalformedURLException, URISyntaxException, UnsupportedEncodingException {
		try {
			newAPIRequest = getAPIRequestFromAPICallExample(jsonCallExample);
			newAPIRequest.decode();
			response = RESTClient.send(newAPIRequest);
			newAPIRequest.setResponse(response);
			
			System.out.println(jsonCallExample.getJsonRequest().getUrl());
			System.out.println(response.getStatus());
			System.out.println(response.getBody());
			
			//TODO need to judge the status
			if (response.getStatus() == 200) {
				jsonCallExample.getJsonResponse().setStatus(String.valueOf(response.getStatus()));
				jsonCallExample.getJsonResponse().setBody(response.getBody());
			}
			
			// resolve conflicts on request && response
			solveConflit();

		} catch (UnirestException e) {
			e.printStackTrace();
		}

	}

	public void discover() throws MalformedURLException, URISyntaxException, UnsupportedEncodingException {
//		jsonCallExample = gson.fromJson(rowJsonCallExample, JSONAPICallExample.class);
		
		newAPIRequest = getAPIRequestFromAPICallExample(jsonCallExample);
		newAPIRequest.decode();
		discoverer.discover(newAPIRequest,schemaName,bodySchema);
		records.add(newAPIRequest);
//		 FacesContext.getCurrentInstance().addMessage(null,
//	                new FacesMessage("API call example added"));
		newAPIRequest = new APIRequest();
		jsonCallExample = new JSONAPICallExample();
		rowJsonCallExample = "";
		schemaName = "";
		bodySchema = "";
		response = new Response();
		

	}

	private void solveConflit(){
		conflictReq();
		conflictRes();
	}
	
	private void conflictReq() {
		// solve request conflict
		// decide to solve the URL conflict and Parameter conflict in next step
	}

	private void conflictRes() {
		// solve response conflict
		// rule: real response > extracted response
		if (jsonCallExample.getJsonResponse().getBody().length() == 0) {
			System.out.println("Fail to return response");
			if (jsonCallExample.getJsonResponse().getEbody().length()!=0){
				System.out.println("Use extracted response examples");
				JSONResponse jsonResponse = jsonCallExample.getJsonResponse();
				jsonResponse.setBody(jsonResponse.getEbody());
				jsonCallExample.setJsonResponse(jsonResponse);
			}
		}
		
	}

	private APIRequest getAPIRequestFromAPICallExample(JSONAPICallExample jsonCallExample) {
		APIRequest apiRequest = new APIRequest();
		apiRequest.setUrl(jsonCallExample.getJsonRequest().getUrl());
		apiRequest.setHttpMethod(jsonCallExample.getJsonRequest().getMethod());
		apiRequest.setBody(jsonCallExample.getJsonRequest().getBody());
		if(jsonCallExample.getJsonResponse().getStatus()!=null && !jsonCallExample.getJsonResponse().getStatus().equals("") )
		apiRequest.getResponse().setStatus(Integer.valueOf(jsonCallExample.getJsonResponse().getStatus()));
		apiRequest.getResponse().setBody(jsonCallExample.getJsonResponse().getBody());
		return apiRequest;
	}

	public void extractExample() {
		rowJsonCallExample = gson.toJson(jsonCallExample);
	}

	public void extractExempleFromform() {

	}

	public void cleanForms() {
		newAPIRequest = new APIRequest();
		response = new Response();
		schemaName = "";

	}

	public List<APIRequest> getRecords() {
		return records;
	}

	public void setRecords(List<APIRequest> records) {
		this.records = records;
	}

	public APIRequest getNewAPIRequest() {
		return newAPIRequest;
	}

	public void setNewAPIRequest(APIRequest newAPIRequest) {
		this.newAPIRequest = newAPIRequest;
	}

	public Response getResponse() {
		return response;
	}

	public void setResponse(Response response) {
		this.response = response;
	}

	public TreeNode getApiTree() {
		return apiTree;
	}

	public void setApiTree(TreeNode apiTree) {
		this.apiTree = apiTree;
	}



	public JSONAPICallExample getJsonCallExample() {
		return jsonCallExample;
	}

	public void setJsonCallExample(JSONAPICallExample jsonCallExample) {
		this.jsonCallExample = jsonCallExample;
	}

	public String getRowJsonCallExample() {
		return rowJsonCallExample;
	}

	public void setRowJsonCallExample(String rowJsonCallExample) {
		this.rowJsonCallExample = rowJsonCallExample;
	}

	public String getSchemaName() {
		return schemaName;
	}

	public void setSchemaName(String schemaName) {
		this.schemaName = schemaName;
	}

	public String getBodySchema() {
		return bodySchema;
	}

	public void setBodySchema(String bodySchema) {
		this.bodySchema = bodySchema;
	}

	public String getOpenapi() {
		return openapi;
	}

	public void setOpenapi(String openapi) {
		this.openapi = openapi;
	}

}