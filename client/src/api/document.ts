import {PostRequest} from "../utils/request-wrappers";
import {TAuthor, TCookie, TDocument} from "../types";

export async function PostDocument(document: TDocument): Promise<TDocument> {
	let response = await PostRequest('document', {'document': document})
	return response.document
}

export async function PostLogin(author: TAuthor): Promise<TCookie> {
	let response = await PostRequest('login', {'author': author})
	return response.cookie
}