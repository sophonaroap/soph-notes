import {ChangeEvent, useState} from 'react'
import './App.css'
import {Box, Button, Input, Textarea} from "@chakra-ui/react";
import {PostDocument} from "./api/document";
import {TDocument} from "./types/main";

const test_author = {
	email: 'test_email@email.com',
	name: 'Test Name'
}

function App(): JSX.Element {
	const [title, setTitle] = useState('Untitled')
	const [text, setText] = useState('')
	const [document, setDocument] = useState<TDocument>()

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let titleValue = e.target.value
		setTitle(titleValue)
	}

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textValue = e.target.value
		setText(textValue)
	}

	const buildDocument = () => {
		const author_id = document ? document.author_id ? document.author_id : undefined : undefined
		const author = document ? document.author ? document.author : test_author : test_author
		const document_data: TDocument = {
			id: document ? document.id : undefined,
			title: title,
			content: text,
			author_id: author_id,
			author: author
		}
		setDocument(document_data)
	}

	const postText = async () => {
		buildDocument()
		const response = await PostDocument(document!)
		console.log('response: ', response)
		console.log(response)
	}

	let submitText = () => {
		console.log('title: ', title)
		console.log('text: ', text)
		let responseText = postText()
	}

	let titleInput = (
		<Input placeholder='Untitled' value={title} onChange={handleTitleChange}/>
	)

	let textInput = (
		<Textarea size='lg' placeholder="Enter text here" value={text} onChange={handleTextChange}/>
	)

	let submitButton = (
		<Button onClick={submitText}>Submit</Button>
	)

	return (
		<Box className="App">
			{titleInput}
			{textInput}
			{submitButton}
		</Box>
	)
}

export default App
