const baseUrl = `http://localhost:8080/`

export async function DeleteRequest(url: string): Promise<any> {
	console.log(`Deleting data from ${url}`)
	const qualifiedUrl = `${baseUrl}${url}`

	return await fetch(qualifiedUrl, {
		method: 'DELETE',
		headers: {'Content-Type': 'application/json'}
	})
		.then((response) => {
			const responseJson = response.json()
			return responseJson
		})
		.then((data) => {
			console.log(`Delete data: ${JSON.stringify(data)}`)
			return data
		})
		.catch((error) => {
			console.error(`Error with DELETE: ${error}`)
			return null
		})
}

export async function GetRequest(url: string): Promise<any> {
	console.log(`Getting data from ${url}`)
	const qualifiedUrl = `${baseUrl}${url}`

	return await fetch(qualifiedUrl, {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
	})
		.then((response) => {
			const responseJson = response.json()
			return responseJson
		})
		.then((data) => {
			console.log(`Get data: ${JSON.stringify(data)}`)
			return data
		})
		.catch((error) => {
			console.error(`Error with GET: ${error}`)
			return null
		})
}

export async function PatchRequest(url: string, body: object | null = null): Promise<any> {
	console.log(`Patching data to ${url}`)
	const qualifiedUrl = `${baseUrl}${url}`

	return await fetch(qualifiedUrl, {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json'},
		credentials: 'same-origin',
		body: JSON.stringify(body)
	})
		.then((response) => {
			const responseJson = response.json()
			return responseJson
		})
		.then((data) => {
			console.log(`Patch data: ${JSON.stringify(data)}`)
			return data
		})
		.catch((error) => {
			console.error(`Error with PATCH: ${error}`)
			return null
		})
}

export async function PostRequest(url: string, body: object | null = null): Promise<any> {
	console.log(`Posting data to ${url}`)
	const qualifiedUrl = `${baseUrl}${url}`

	return await fetch(qualifiedUrl, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		credentials: 'same-origin',
		body: JSON.stringify(body)
	})
		.then((response) => {
			const responseJson = response.json()
			return responseJson
		})
		.then((data) => {
			console.log(`Post data: ${JSON.stringify(data)}`)
			return data
		})
		.catch((error) => {
			console.error(`Error with POST: ${error}`)
			return null
		})
}

export async function PutRequest(url: string, body: object | null = null): Promise<any> {
	console.log(`Putting data to ${url}`)
	const qualifiedUrl = `${baseUrl}${url}`

	return await fetch(qualifiedUrl, {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(body)
	})
		.then((response) => {
			const responseJson = response.json()
			return responseJson
		})
		.then((data) => {
			console.log(`Put data: ${JSON.stringify(data)}`)
			return data
		})
		.catch((error) => {
			console.error(`Error with PUT: ${error}`)
			return null
		})
}
