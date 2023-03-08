import {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {Box, Button, Heading, Textarea} from "@chakra-ui/react";
import {PostRequest} from "./utils/request-wrappers";

function App(): JSX.Element {
	const [count, setCount] = useState(0)
	const [message, setMessage] = useState('')
	const [text, setText] = useState('')

	let handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textValue = e.target.value
		setText(textValue)
	}

	const postText = async () => {
		const response = await PostRequest('message', {message: text})
		return response
	}

	let submitText = () => {
		console.log(text)
		let responseText = postText()
	}

	useEffect(() => {
		fetch('http://localhost:8080/message')
			.then(res => res.json())
			.then(data => setMessage(data.message))
	}, [])

	let textInput = (
		<Textarea size='lg' placeholder="Enter text here" value={text} onChange={handleTextChange}/>
	)

	let submitButton = (
		<Button onClick={submitText}>Submit</Button>
	)

	return (
		<Box className="App">
			<Heading>{message}</Heading>
			{textInput}
			{submitButton}
			{/*<div>*/}
			{/*	<a href="https://vitejs.dev" target="_blank">*/}
			{/*		<img src="/vite.svg" className="logo" alt="Vite logo"/>*/}
			{/*	</a>*/}
			{/*	<a href="https://reactjs.org" target="_blank">*/}
			{/*		<img src={reactLogo} className="logo react" alt="React logo"/>*/}
			{/*	</a>*/}
			{/*</div>*/}
			{/*<h1>Vite + React</h1>*/}
			{/*<div className="card">*/}
			{/*	<button onClick={() => setCount((count) => count + 1)}>*/}
			{/*		count is {count}*/}
			{/*	</button>*/}
			{/*	<p>*/}
			{/*		Edit <code>src/App.tsx</code> and save to test HMR*/}
			{/*	</p>*/}
			{/*</div>*/}
			{/*<p className="read-the-docs">*/}
			{/*	Click on the Vite and React logos to learn more*/}
			{/*</p>*/}
		</Box>
	)
}

export default App
