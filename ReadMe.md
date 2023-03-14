To run docker:
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Setup and Run

## Server
Go to server directory:
```shell
cd server
```

### Setup
Install dependencies:
```shell
npm install
```

Build docker images:
```shell
docker-compose build --no-cache
```

Start server:
```shell
docker-compose up
```

Setup database:
```shell
npx prisma db push
```

### Run
Start server:
```shell
docker-compose up
```

## Client
Go to client directory:
```shell
cd client
```

Install dependencies:
```shell
npm install
```

Start client:
```shell
npm run dev
```

# Commands

## Mongo

Show databases
```shell
show dbs
```

List collections (tables)
```shell
show collections
```

Enter db shell:
```shell
docker-compose exec mongo mongosh -u root -p prisma
```

## Prisma

You need to re-run the prisma generate command after every change that's made to your Prisma schema to update the generated Prisma Client code:
```shell
npx prisma generate
npx prisma db push
```

