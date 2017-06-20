install:
	pyenv install
	ndenv install
	pip install -r requirements.txt
	npm install
	python manage.py migrate

update:
	git pull

clean:
	rm -rf nobiki/static/
	find . | grep -E '(__pycache__|\.pyc|\.pyo)' | xargs rm -rf

static:
	python nobiki/manage.py collectstatic --noinput
	./node_modules/.bin/webpack -p

reload:
	touch .uwsgi_reload
	touch .websocket_reload

jenkins:
	make update
	make clean
	make static
	make reload
