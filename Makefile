.PHONY: start-db stop-db start-backend run-backend

start-db:
	docker compose up --build

stop-containers:
	docker compose down -v

stop-db:
	docker compose down

start-backend:
	cd backend && npm run dev

run-backend: start-db start-backend
