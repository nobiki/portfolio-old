.DEFAULT_GOAL := help
.PHONY: help

install: ## laravel install + application setup
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml up -d portfolio-composer
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml run --rm portfolio-composer composer create-project laravel/laravel /app v5.7.0
	make setup

setup: ## application setup
	make container
	sudo chmod -R 777 web/bootstrap/cache/
	sudo chmod -R 777 web/storage/
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml run --rm portfolio-node yarn --cwd /web install
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml run --rm portfolio-composer composer install
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml restart
	sudo chown -R 1000:1000 web/

assets: ## npm run dev
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml run --rm portfolio-node npm --prefix /web run dev

assets-watch: ## npm run watch
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml run --rm portfolio-node npm --prefix /web run watch

key: ## artisan key:generate
	docker exec portfolio-php php /web/artisan key:generate

migrate: ## artisan migrate
	docker exec portfolio-php php /web/artisan migrate

container: ## compose up
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml up -d

container-destroy: ## compose stop -> rm
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml stop
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml rm -f

container-rerun: ## compose stop -> rm -> up
	make container-destroy
	make container

container-restart: ## compose restart
	docker-compose -f ./docker-network.yml -f ./docker-compose.yml restart

help: # [Makefileを自己文書化する](https://postd.cc/auto-documented-makefile/)
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
