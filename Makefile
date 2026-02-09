.PHONY: start-db stop-db start-api stop-api start-frontend stop-frontend run-backend stop-backend run-project stop-project

start-db: 
	docker compose up --build -d database

stop-db: 
	docker compose down database

start-api: 
	docker compose up --build -d api

stop-api: 
	docker compose down api

start-frontend: 
	docker compose up --build -d web

stop-frontend: 
	docker compose down web

run-backend: 
	start-db start-api

stop-backend: 
	stop-db stop-api

run-project: 
	docker compose up --build

stop-project: 
	docker compose down -v