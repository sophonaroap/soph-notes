A markdown text editor with live generation

Utilizes the following technologies:
Backend:
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

Frontend:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

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
docker-compose exec db mongosh -u root -p prisma
```

## Prisma

You need to re-run the prisma generate command after every change that's made to your Prisma schema to update the generated Prisma Client code:
```shell
docker-compose up
docker-compose exec backend npx prisma generate
docker-compose exec backend npx prisma db push
```

[Prisma Model Queries](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries)

[Prisma Model Type Definitions](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#type-definitions)

[Prisma Generated Types](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety)

### Types

Models are imported directly from @prisma/client
```typescript
import { User } from '@prisma/client'
```

Generated types are imported from @primsa/client/Prisma:
```typescript
import { Prisma } from '@prisma/client'

const user: Prisma.AuthorCreateInput = {
	email: 'hello@hello.com',
	name: 'Hello World'
}
```


