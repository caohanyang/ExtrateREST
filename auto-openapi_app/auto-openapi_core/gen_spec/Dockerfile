# AutoREST_app
FROM ubuntu
MAINTAINER Hanyang CAO <caohanyang007@gmail.com>

# Install java
RUN apt-get update && apt-get install -y sudo 
RUN sudo apt-get install -y default-jdk

# Set the working directory to /app
RUN mkdir /tmp/gen_spec
WORKDIR /tmp/gen_spec

# Add existing contens
COPY . /tmp/gen_spec

RUN chmod +x /tmp/gen_spec

EXPOSE 3000