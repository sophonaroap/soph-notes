import {ChangeEvent, useState} from 'react'
import './App.css'
import {Box, Button, Input, Textarea} from "@chakra-ui/react";
import {PostRequest} from "./utils/request-wrappers";

function App(): JSX.Element {
	const [title, setTitle] = useState('Untitled')
	const [text, setText] = useState('')

	let handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let titleValue = e.target.value
		setTitle(titleValue)
	}

	let handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textValue = e.target.value
		setText(textValue)
	}

	const postText = async () => {
		const response = await PostRequest('message', {message: text})
		return response
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
