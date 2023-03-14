migrate_prisma_schema:
	cd server ; docker-compose run --rm node npx prisma generate

migrate_prisma_db:
	cd server ; docker-compose run --rm node npx prisma db push

prisma_db_build:
	cd server ; docker-compose run --rm node npx tsc main/commands/init_author_mongo.ts

mongo_shell:
	cd server ; docker-compose exec mongo mongosh -u root -p prisma

run_server:
	cd server ; docker-compose up

run_client:
	cd client ; npm run dev