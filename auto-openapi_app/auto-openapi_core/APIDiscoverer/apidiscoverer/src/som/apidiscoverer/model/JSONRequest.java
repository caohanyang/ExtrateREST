package som.apidiscoverer.model;

public class JSONRequest {
	private String ourl;
	private String url;
	private HttpMethod method;
	private String body;
	
	public String getOurl() {
		return ourl;
	}
	public void setOurl(String ourl) {
		this.ourl = ourl;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public HttpMethod getMethod() {
		return method;
	}
	public void setMethod(HttpMethod method) {
		this.method = method;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}

	
}