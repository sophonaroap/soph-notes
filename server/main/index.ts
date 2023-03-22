'use strict'

import * as dotenv from 'dotenv'
import express, {Express, NextFunction, Request, Response} from 'express'
import {prisma} from './prisma/prisma-client'
import {Document, Prisma} from '@prisma/client'
import RedisStore from 'connect-redis'
import {createClient} from 'redis'
import session from 'express-session'
import cors from 'cors'

dotenv.config()

// This fixes a typescript error, since process.env.PORT can 'possibly' be a string
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080
const HOST = process.env.HOST || '0.0.0.0'

const redisClient = createClient({
	socket: {
		host: process.env.REDIS_HOST,
		port: parseInt(process.env.REDIS_PORT as string),
	}
})
redisClient.connect().catch(console.error)

const redisStore = new RedisStore({
	client: redisClient,
	prefix: 'sess:',
})

// Create an express app
/*
    This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware,
    rendering HTML views, registering a template engine, and modifying application settings that control how the
    application behaves (e.g. the environment mode, whether route definitions are case-sensitive, etc.)
 */
const app: Express = express()

app.use(cors({
	credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
	session({
		store: redisStore,
		resave: false,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET as string,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
		}
	})
)

// Middleware to see if a user is authenticated
app.use((req: Request, res: Response, next: NextFunction) => {
	if (req.session?.author) {
		console.log(`User ${req.session.author.name} is authenticated`)
		next()
	} else {
		console.log(`User is not authenticated`)
		console.log(`Session Cookie: ${JSON.stringify(req.session)}`)
		next('route')
	}
})

// app.get('/', isAuthenticated, (req: Request, res: Response) => {
//   res.send(`Welcome ${req.session.author!.name}`)
// })

/*
    A route definition. The app.get() method specifies a callback function that will be invoked whenever there is an
    HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response
    object as arguments, and calls send() on the response to return the string "Hello World!"
 */
app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.post('/login', (req: Request, res: Response, next: NextFunction) => {

	req.session.regenerate((err) => {
		if (err) {
			console.error(err)
			next(err)
		}

		req.session.author = req.body.author
		console.log(req.session.author)

		req.session.save((err) => {
			if (err) {
				console.error(err)
				next(err)
			}
			res.json({message: 'Login successful', success: true, cookie: req.session.cookie})
		})
	})
})

app.get('/message', (req: Request, res: Response) => {
	console.log(req.session.message)
	res.json({message: 'Hello from server!', success: true})
})

app.post('/document', async (req: Request, res: Response) => {
	console.log('Document received')
	console.log('Document: ', req.body.document)


	let document_id = req.body.document.id
	let document: Document

	if (document_id) {
		console.log('Document ID: ', document_id)

		let update_data: Prisma.DocumentUpdateInput = {
			content: req.body.document.content,
		}

		document = await prisma.document.update({
			where: {id: document_id},
			data: update_data,
		})
	} else {
		let create_data: Prisma.DocumentCreateInput = {
			content: req.body.document.content,
			title: req.body.document.title,
			author: {
				connect: {email: req.body.document.author.email}
			}
		}

		document = await prisma.document.create({
			data: create_data,
		})
	}

	res.json({document: JSON.stringify(document)})
})

/*
    Start the server on the specified port and logs the comment to the console.
 */
app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`)
})
