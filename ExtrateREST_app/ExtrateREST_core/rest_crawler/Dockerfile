# AutoREST_app
FROM ubuntu
MAINTAINER Hanyang CAO <caohanyang007@gmail.com>

# Install python
RUN apt-get update && apt-get install -y sudo 
RUN sudo apt-get install -y python-pip python-dev build-essential python-numpy python-qt4 python-lxml python-six
RUN sudo pip install --upgrade pip 

# Install beautifulsoup
RUN pip install beautifulsoup4
RUN pip install --upgrade ete3


# Set the working directory to /app
RUN mkdir /tmp/rest_crawler
WORKDIR /tmp/rest_crawler

# Add existing contens
COPY . /tmp/rest_crawler
RUN chmod +x /tmp/rest_crawler


EXPOSE 3000
