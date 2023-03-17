A Markdown text editor with live generation

Utilizes the following technologies (because why not do them all):

### Backend:
- DB
  - [Prisma](https://www.prisma.io/)
  - [MongoDB](https://www.mongodb.com/)
- Language
  - [TypeScript](https://www.typescriptlang.org/)
- Language Framework
  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
- Session Management
  - [Redis](https://redis.io/)
  - [Express Session](https://www.npmjs.com/package/express-session)
  - [Connect Redis](https://www.npmjs.com/package/connect-redis)
- Run Configuration
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

### Frontend
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)

# Setup and Run

## Server

### Manually
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

### Using Makefile

#### Scratch
```shell
make build_server
make prisma_db_init
make run_server
```

Optionally, add a single Author
```shell
make prisma_db_seed
```

#### Auto
```shell
make init_server_scratch
```

OR, init with a single Author
```shell
make init_server_scratch_with_author
```

### Run
Start server:
```shell
make run_server
```

Start client:
```shell
npm run dev
```

### Build & Run
Build and start server:
```shell
make run_server_scratch
```

Build and start server with a single Author:
```shell
make run_server_scratch_with_author
```

Start client:
```shell    
make run_client
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

Or, using the Makefile:
```shell
prisma_db_init
```

### References

[Prisma Model Queries](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries)

[Prisma Model Type Definitions](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#type-definitions)

[Prisma Generated Types](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety)

### Types

Models are imported directly from @prisma/client
```typescript
import { User } from '@prisma/client'
```

Generated types are imported from @prisma/client/Prisma:
```typescript
import { Prisma } from '@prisma/client'

const user: Prisma.AuthorCreateInput = {
	email: 'hello@hello.com',
	name: 'Hello World'
}
```


