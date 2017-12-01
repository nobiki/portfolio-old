#!/bin/bash

if [[ ! -e /home/docker/code/app/bootstrap.lock ]]; then
	git clone https://github.com/nobiki/portfolio.git /home/docker/code/app
	pip3 install -r /home/docker/code/app/requirements.txt

	cd /home/docker/code/app && npm install
	cd /home/docker/code/app && python3 nobiki/manage.py collectstatic --noinput
	cd /home/docker/code/app && ./node_modules/.bin/webpack -p

	touch /home/docker/code/app/bootstrap.lock
else
	cd /home/docker/code/app && ./.jenkins
fi

/usr/bin/supervisord -n
