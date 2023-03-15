import {PostRequest} from "../utils/request-wrappers";
import {TDocument} from "../types/main";

export async function PostDocument(document: TDocument): Promise<TDocument> {
	let response = await PostRequest('document', {'document': document})
	return response.document
}