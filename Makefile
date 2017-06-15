install:
	pip install -r requirements.txt
	npm install

update:
	git pull

reload:
	touch .uwsgi_reload
	touch .websocket_reload

static:
	python nobiki/manage.py collectstatic --noinput

clean:
	rm -rf nobiki/static/
	find . | grep -E '(__pycache__|\.pyc|\.pyo)' | xargs rm -rf

test:
	dir=$(shell pwd)
	echo ${dir}
