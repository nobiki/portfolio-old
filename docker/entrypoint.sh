#!/bin/bash

git clone https://github.com/nobiki/portfolio.git /home/docker/code/app
pip3 install -r /home/docker/code/app/requirements.txt
cd /home/docker/code/app && npm install
cd /home/docker/code/app && python3 nobiki/manage.py collectstatic --noinput
cd /home/docker/code/app && ./node_modules/.bin/webpack -p

/usr/bin/supervisord -n
