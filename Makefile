prisma_db_build:
	cd server ; docker-compose run --rm backend npx ts-node main/commands/init_author_mongo.ts

mongo_shell:
	cd server ; docker-compose exec db mongosh -u root -p prisma

run_server:
	cd server ; docker-compose up

run_client:
	cd client ; npm run dev