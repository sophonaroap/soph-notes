build_server:
	cd server ; docker compose build --no-cache

prisma_db_init:
	cd server ; docker compose run --rm backend bash -c "npx prisma generate && npx prisma db push"

prisma_db_seed:
	cd server ; docker compose run --rm backend npx ts-node main/commands/init_author_mongo.ts

run_server:
	cd server ; docker compose up -d; docker compose logs -f backend cache

init_server_scratch:
	make build_server
	make prisma_db_init

init_server_scratch_with_author:
	make build_server
	make prisma_db_init
	make prisma_db_seed

run_server_scratch:
	make init_server_scratch
	make run_server

run_server_scratch_with_author:
	make init_server_scratch_with_author
	make run_server

run_client:
	cd client ; npm run dev

mongo_shell:
	cd server ; docker compose exec db mongosh -u root -p prisma

show_redis:
	cd server ; docker compose exec cache redis-cli KEYS \*