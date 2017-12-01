install:
	pyenv install
	ndenv install
	python manage.py migrate

upgrade:
	git pull
	pip install -r requirements.txt
	npm install

upgrade3:
	git pull
	pip3 install -r requirements.txt
	npm install

update:
	git pull

clean:
	rm -rf nobiki/static/
	find . | grep -E '(__pycache__|\.pyc|\.pyo)' | xargs rm -rf

static:
	python nobiki/manage.py collectstatic --noinput
	./node_modules/.bin/webpack -p

static3:
	python3 nobiki/manage.py collectstatic --noinput
	./node_modules/.bin/webpack -p

reload:
	touch .uwsgi_reload
	touch .websocket_reload

