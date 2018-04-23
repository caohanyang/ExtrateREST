#! /bin/bash

export SLIMERJSLAUNCHER=/Applications/Firefox.app/Contents/MacOS/firefox

# TOP 15
# https://developers.facebook.com/docs/graph-api https://developers.facebook.com/docs/graph-api/reference
# https://developer.twitter.com/en/docs/api-reference-index https://developer.twitter.com/en/docs
# https://developers.google.com/youtube/v3 https://developers.google.com/youtube/v3/docs
# https://developer.linkedin.com/docs
# http://docs.aws.amazon.com/AWSECommerceService/latest/DG/Welcome.html   http://docs.aws.amazon.com/AWSECommerceService/latest/DG
# https://www.instagram.com/developer https://www.instagram.com/developer/endpoints
# https://www.flickr.com/services/api
# http://www.last.fm/api
# https://en.wikipedia.org/api/rest_v1/  (https://www.mediawiki.org/wiki/REST_API https://en.wikipedia.org/api/rest_v1/)
# https://developer.foursquare.com/docs https://developer.foursquare.com/docs/api
# https://www.twilio.com/docs/api/rest
# https://developers.google.com/google-apps/calendar/v3/reference/
# https://developer.paypal.com/docs/api/overview/ https://developer.paypal.com/docs/api/
# https://go.developer.ebay.com/api-documentation   http://developer.ebay.com/devzone/rest
# https://developer.ebay.com/api-docs/sell/account/overview.html https://developer.ebay.com/api-docs/sell/account
# http://www.geonames.org/export/ws-overview.html   http://www.geonames.org/export


# TOP 15-30
# https://www.yelp.com/developers/documentation/v3
# https://msdn.microsoft.com/en-us/library/ff701713.aspx  https://msdn.microsoft.com/en-us/library/ff
# picasa
# https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-web-api-v5-reference
# Amazon S3
# https://github.com/domainersuitedev/delicious-api https://github.com/domainersuitedev/delicious-api/blob/master/api
# https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/
# https://developer.box.com/reference
# Musicbrainz
# Saleforce
# Bit.ly
# Google Custom Search
# https://developers.google.com/adsense/management/v1.4/reference/
# Amazon EC2
# https://docs.docusign.com/esign      https://docs.docusign.com/esign/restapi



# Random 20 (learning)
# https://developers.google.com/books/docs/v1/reference/ 
# https://api.mobbr.com/ 
# https://www.afterbanks.com/api/documentation/es/ 
# https://www.ibm.com/watson/developercloud/conversation/api/v1/ 

# https://1forge.com/forex-data-api/api-documentation 
# https://rms.api.bbc.co.uk/docs/
# https://developers.coinbase.com/api/v2
# https://cloud.google.com/translate  https://cloud.google.com/translate/docs/reference
# https://market.mashape.com/andruxnet/random-famous-quotes

# https://www.ifixit.com/api/2.0/doc/
# http://www.typepad.com/services/apidocs
# https://developers.esendex.com/api-reference
# https://developers.simplepay.ng/api/
# https://support.clickbank.com/hc/en-us/articles/229281487-Quickstats-API
# https://developer.mapquest.com/documentation/open/directions-api/
# https://developer.sportradar.com/files/indexSquash.html
# https://goshippo.com/docs/reference
# http://static.support.fotozap.com/UPLOADERS.html
# https://www.sculpteo.com/en/developer/webapi/
# http://www.monitis.com/docs/api.html

# Random 15 (evaluation)
# https://developer.vimeo.com/api/endpoints
# https://sites.google.com/site/picplzapi/
# https://www.campaignmonitor.com/api/
# https://www.layar.com/documentation/browser/api/
# http://api.eventful.com/docs
# https://www.behance.net/dev/api/endpoints/
# http://developer.active.com/docs/read/Home  http://developer.active.com/docs/read
# https://developer.accuweather.com/apis  https://developer.accuweather.com/
# https://aiception.com/static/doc/index.html
# http://developer.mailchimp.com/documentation/mailchimp/reference/overview/ http://developer.mailchimp.com/documentation/mailchimp/reference/

# http://www.colourlovers.com/api
# https://dev.groupme.com/ 
# https://kinseyreporter.org/data
# https://bcl.nrel.gov/developer
# http://pirateplay.se/api/manual.html


# Else
# https://developers.google.com/maps/documentation/
# https://developers.google.com/maps/documentation/directions


# python ./predict_page/predictExternalTest.py $1


echo $PWD

cd ExtrateREST_core

# 1.1 crawl html page
# python rest_crawler/crawlAllPages.py $1 $2

# 2. predict html page
# python predict_page/predictExternal.py $1


# 3. run java to build the OPENAPI documentation


# /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/bin/java -Xms1024m -Xmx8192m -Dfile.encoding=UTF-8 -classpath ./gen_spec/target/classes:./gen_spec/lib/* com.hanyang.ExtractInformation $1



java -Xms1024m -Xmx8192m -Dfile.encoding=UTF-8 -classpath ./gen_spec/target/classes:./gen_spec/lib/* com.hanyang.ExtractInformation $1




# 4. history
# https://web.archive.org/web/20170605190839/https://www.instagram.com/developer/endpoints/
# https://web.archive.org/web/20170109154018/https://www.instagram.com/developer/endpoints/
# https://web.archive.org/web/20160708101703/https://www.instagram.com/developer/endpoints/
# https://web.archive.org/web/20160101054459/https://www.instagram.com/developer/endpoints/
# https://web.archive.org/web/20150708162652/https://www.instagram.com/developer/endpoints/
# https://web.archive.org/web/20150107054829/https://www.instagram.com/developer/endpoints/

# https://web.archive.org/web/20110712011347/https://www.instagram.com/developer/endpoints/


# 5. validation
# node apiDiscover.js https://developer.twitter.com/en/docs/api-reference-index
# node combine.js https://developer.twitter.com/en/docs/api-reference-index