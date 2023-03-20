import "express-session"
import {Author} from "@prisma/client";

declare module "express-session" {
	export interface SessionData {
		message: string,
		author: Author
	}
}

export {}