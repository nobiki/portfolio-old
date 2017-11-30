FROM debian:stretch
MAINTAINER Naoaki Obiki

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
	git \
	make autoconf automake gcc g++ \
	python3 \
	python3-dev \
	python3-setuptools \
	python3-pip \
	nodejs \
	nginx \
	supervisor \
	sqlite3 && \
	pip3 install -U pip setuptools && \
   rm -rf /var/lib/apt/lists/*

RUN pip3 install uwsgi

# nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx-app.conf /etc/nginx/sites-available/default

# node
RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
RUN sudo apt install -y nodejs

# supervisor
COPY supervisor-app.conf /etc/supervisor/conf.d/

# website
COPY ../requirements.txt /home/docker/code/app/
RUN pip3 install -r /home/docker/code/app/requirements.txt
COPY ../ /home/docker/code/app/

RUN cd /home/docker/code/app && npm install
RUN cd /home/docker/code/app && make static

CMD ["supervisord", "-n"]
