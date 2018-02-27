package som.apidiscoverer.model;

public class JSONResponse {
	private String status;
	private String body;
	private String ebody;
	
	public String getEbody() {
		return ebody;
	}
	public void setEbody(String ebody) {
		this.ebody = ebody;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	

	
}