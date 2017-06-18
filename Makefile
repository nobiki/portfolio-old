install:
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
	webpack -p

reload:
	touch .uwsgi_reload
	touch .websocket_reload

