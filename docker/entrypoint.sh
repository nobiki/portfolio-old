#!/bin/bash

if [[ ! -e /home/docker/code/app/bootstrap.lock ]]; then
   git clone https://github.com/nobiki/portfolio.git /home/docker/code/app

   touch /home/docker/code/app/bootstrap.lock
fi

cd /home/docker/code/app && make upgrade3 && make clean && make static3

/usr/bin/supervisord -n
