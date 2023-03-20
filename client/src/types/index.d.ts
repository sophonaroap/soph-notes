export type TAuthor = {
	id?: string
	name: string
	email: string
}

export type TDocument = {
	// When first created, the document will not have an id
	id?: string
	title: string
	content: string
	author_id?: string
	author?: TAuthor
}

export type TCookie = {
	[key: string]: string
}