migrate_prisma_schema:
	docker-compose run --rm node npx prisma generate

migrate_prisma_db:
	docker-compose run --rm node npx prisma db push

prisma_db_build:
	docker-compose run --rm node npx tsc main/init_dev_mongo.ts

mongo_shell:
	docker-compose exec mongo mongosh -u root -p prisma