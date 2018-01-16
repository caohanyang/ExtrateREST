# AutoREST_front
FROM ubuntu
MAINTAINER Hanyang CAO <caohanyang007@gmail.com>

# Install node
RUN apt-get update -y \
	&& apt-get install curl -y
	# && apt-get -y install sudo
RUN curl -o /usr/local/bin/n https://raw.githubusercontent.com/visionmedia/n/master/bin/n
RUN chmod +x /usr/local/bin/n
RUN n latest

# Set the working directory to /front
RUN mkdir /tmp/front
WORKDIR /tmp/front

# Add existing contens
COPY . /tmp/front

RUN chmod +x /tmp/front

# RUN npm i -g @angular/cli

# RUN npm install
RUN npm rebuild node-sass

EXPOSE 4200
CMD ["./node_modules/.bin/ng", "serve", "-H", "0.0.0.0"]