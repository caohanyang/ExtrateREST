#! /bin/bash

export SLIMERJSLAUNCHER=/Applications/Firefox.app/Contents/MacOS/firefox

# 1.1 crawl html page
# https://www.instagram.com/developer https://www.instagram.com/developer/endpoints
# https://developer.twitter.com/en/docs/api-reference-index https://developer.twitter.com/en/docs
# https://www.flickr.com/services/api
# https://developers.google.com/youtube/v3 https://developers.google.com/youtube/v3/docs
# https://www.twilio.com/docs/api/rest
# https://developer.linkedin.com/docs
# http://api.eventful.com/docs
# https://cloud.google.com/translate  https://cloud.google.com/translate/docs/reference
# https://www.yelp.com/developers/documentation/v3
# https://docs.docusign.com/esign      https://docs.docusign.com/esign/restapi

# https://developers.facebook.com/docs/graph-api https://developers.facebook.com/docs/graph-api/reference
# http://docs.aws.amazon.com/AWSECommerceService/latest/DG/Welcome.html   http://docs.aws.amazon.com/AWSECommerceService/latest/DG
# https://en.wikipedia.org/api/rest_v1/
# https://developers.google.com/maps/documentation/
# http://www.last.fm/api
# https://developer.foursquare.com/docs https://developer.foursquare.com/docs/api
# https://www.mediawiki.org/wiki/REST_API https://en.wikipedia.org/api/rest_v1/
# http://www.geonames.org/export/ws-overview.html   http://www.geonames.org/export
# https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-web-api-v5-reference
# https://go.developer.ebay.com/api-documentation   http://developer.ebay.com/devzone/rest
# https://msdn.microsoft.com/en-us/library/ff701713.aspx  https://msdn.microsoft.com/en-us/library/ff
# https://developer.box.com/reference
# https://github.com/domainersuitedev/delicious-api https://github.com/domainersuitedev/delicious-api/blob/master/api

# https://developers.google.com/maps/documentation/directions
# https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/
# https://developers.google.com/adsense/management/v1.4/reference/

# python ./predict_page/predictExternalTest.py $1


# https://developer.vimeo.com/api/endpoints
# https://developers.google.com/books/docs/v1/reference/
# https://sites.google.com/site/picplzapi/
# http://developer.active.com/docs/read/Home  http://developer.active.com/docs/read
# https://www.layar.com/documentation/browser/api/
# https://www.campaignmonitor.com/api/
# https://api.mobbr.com/
# https://dev.groupme.com/


# http://developer.mailchimp.com/documentation/mailchimp/reference/overview/
# https://www.ibm.com/watson/developercloud/conversation/api/v1/

# 1.2 marketplace
# https://market.mashape.com/andruxnet/random-famous-quotes

# 1.3 Random
# https://developers.coinbase.com/api/v2
# https://www.behance.net/dev/api/endpoints/
# https://dev.groupme.com/
# https://developer.accuweather.com/apis  https://developer.accuweather.com/
# https://aiception.com/static/doc/index.html
# https://www.campaignmonitor.com/api/
# https://www.layar.com/documentation/browser/api/
# https://sites.google.com/site/picplzapi/  
# https://developer.vimeo.com/api/endpoints
# https://developers.google.com/books/docs/v1/reference/
# http://developer.active.com/docs/read/Home  http://developer.active.com/docs/read

# 1.3 APIs.guru
# https://1forge.com/forex-data-api/api-documentation
# https://www.afterbanks.com/api/documentation/es/
# https://rms.api.bbc.co.uk/docs/
echo $PWD

cd autorest_core

python rest_crawler/crawlAllPages.py $1 $2

# 2. predict html page
python predict_page/predictExternal.py $1


# 3. run java to build the OPENAPI documentation


# /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/bin/java -Xms1024m -Xmx8192m -Dfile.encoding=UTF-8 -classpath ./gen_spec/target/classes:./gen_spec/lib/* com.hanyang.ExtractInformation $1

# java -Xms1024m -Xmx8192m -Dfile.encoding=UTF-8 -classpath ./gen_spec/bin/target/classes:./gen_spec/lib/* com.hanyang.ExtractInformation $1

java -Xms1024m -Xmx8192m -Dfile.encoding=UTF-8 -classpath ./gen_spec/target/classes:./gen_spec/lib/* com.hanyang.ExtractInformation $1
