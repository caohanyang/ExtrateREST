# AutoREST_app
FROM ubuntu
MAINTAINER Hanyang CAO <caohanyang007@gmail.com>

# Install node
RUN apt-get update -y \
	&& apt-get install curl -y
RUN curl -o /usr/local/bin/n https://raw.githubusercontent.com/visionmedia/n/master/bin/n
RUN chmod +x /usr/local/bin/n
RUN n latest

# Install java
RUN apt-get update && apt-get install -y sudo 
RUN sudo apt-get install -y default-jdk

# Install python
RUN apt-get update && apt-get install -y sudo 
RUN sudo apt-get install -y python-pip python-dev build-essential python-numpy python-qt4 python-lxml python-six python-tk
RUN sudo pip install --upgrade pip 


# Install beautifulsoup
RUN pip install --upgrade beautifulsoup4
RUN pip install --upgrade html5lib
RUN pip install --upgrade ete3

# Install scikit
RUN pip install -U scikit-learn
RUN python -m pip install --user numpy scipy matplotlib ipython jupyter pandas sympy nose


# Set the working directory to /app
RUN mkdir /tmp/app
WORKDIR /tmp/app

# Add existing contens
COPY . .

# COPY autorest_core autorest_core/
# COPY bin ./bin/
# COPY controllers ./controllers/
# COPY models  ./models/
# COPY node_modules  ./node_modules/
# COPY public  ./public/
# COPY routes  ./routes/
# COPY services  ./services/
# COPY views  ./views/
# COPY app.js .
# COPY package.json .
# COPY package-lock.json .

RUN chmod +x /tmp/app


EXPOSE 3000

CMD node ./bin/www --mongo=mongo