import {Prisma, PrismaClient} from "@prisma/client";

async function init_author_mongo() {
	console.log('Initializing dev mongo');

	const prisma_client = new PrismaClient()

	// Getting or creating initial user
	const initialUser: Prisma.AuthorCreateInput = {
		email: 'test_email@email.com',
		name: 'Test User',
	}

	const returnedInitialUser = await prisma_client.author.upsert({
		where: {
			email: initialUser.email,
		},
		update: initialUser,
		create: initialUser,
	})

	console.log('Updated or created initial user: ' + returnedInitialUser)
}

init_author_mongo()