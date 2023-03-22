# Notes

## References

[Prisma Model Queries](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries)

[Prisma Model Type Definitions](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#type-definitions)

[Prisma Generated Types](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety)

### Types

Models are imported directly from @prisma/client

```typescript
import {User} from '@prisma/client'
```

Generated types are imported from @prisma/client/Prisma:

```typescript
import {Prisma} from '@prisma/client'

const user: Prisma.AuthorCreateInput = {
	email: 'hello@hello.com',
	name: 'Hello World'
}
```