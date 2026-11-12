setup: prepare install build db-migrate

install:
	npm install

db-migrate:
	node server/db/migrate.js

db-generate:
	npx drizzle-kit generate

build:
	npm run build

prepare:
	cp -n .env.example .env || true

# Бэкенд и пересборка стилей идут параллельно с подписанным выводом; падение одного гасит оба
start:
	npx concurrently -k -n backend,frontend "make start-backend" "make start-frontend"

start-backend:
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .pglite'

start-frontend:
	npx vite build --watch

lint:
	npx oxlint --deny-warnings && npx oxfmt --check

test:
	npm test -s
