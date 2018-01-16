# AutoREST_app
FROM ubuntu
MAINTAINER Hanyang CAO <caohanyang007@gmail.com>

# Install python
RUN apt-get update && apt-get install -y sudo 
# add new
RUN sudo apt-get install -y python-pip python-dev build-essential python-tk
RUN sudo pip install --upgrade pip 

# Install scikit
RUN pip install -U scikit-learn
RUN python -m pip install --user numpy scipy matplotlib ipython jupyter pandas sympy nose

# Set the working directory to /app
RUN mkdir /tmp/predict_page
WORKDIR /tmp/predict_page

# Add existing contens
COPY . /tmp/predict_page
RUN chmod +x /tmp/predict_page

# install Python
# FROM python:2.7-slim

EXPOSE 3000