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
	java -jar ./node_modules/google-closure-compiler/compiler.jar --help
	java -jar ./node_modules/google-closure-stylesheets/stylesheets.jar --help

reload:
	touch .uwsgi_reload
	touch .websocket_reload

