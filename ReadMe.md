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

Enter db shell:
```shell
docker-compose exec mongo mongosh -u user -p pass
```

