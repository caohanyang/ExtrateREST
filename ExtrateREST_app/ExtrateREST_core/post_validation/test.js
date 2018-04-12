public string clientId='Ae6vdJgUBNfhns8dYvlZ0lwFulbDeoTzbMirmk2cAwHFXeZy6TVEy6nSL6WkDOB1ScgTAYtJeBNSY0gP';
public string secret='EJMvsmG0qLqEVUVl7FwD4DsNEp5ISUL9SmqwjoJj61jmyrLSBZXKd5E1GMaURl-m3tSJZeKgBkRSA-TX';
public string accessToken='';

public void accessToken()
{
	string input=clientId+':'+secret;
	Blob myBlob = Blob.valueof(input);
	string paramvalue = EncodingUtil.base64Encode(myBlob);
	Http http=new Http();
	HttpRequest req=new HttpRequest();
	req.setMethod('POST');
	string endpoint='https://api.sandbox.paypal.com/v1/oauth2/token?grant_type=client_credentials';
	req.setEndpoint(endpoint);
	req.setHeader('Authorization','Basic '+paramvalue);
	req.setHeader('Accept','application/json');
	req.setHeader('content-type','application/x-www-form-urlencoded');
	req.setHeader('Accept-Language','en_US');
	req.setHeader('Cache-Control','no-cache');
	req.setBody('grant_type=client_credentials');
	HttpResponse res = new HttpResponse();
	res = http.send(req);
	if(res.getStatusCode()==200)
	{
		 Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
		 accessToken = (string)results.get('access_token');
		 system.debug(accessToken);
	}



}