import {ChangeEvent, useState} from "react";
import {FormControl} from "@chakra-ui/react";
import EmailInput from "../../molecules/EmailInput";
import PasswordInput from "../../molecules/PasswordInput";

export default function LoginForm(props: any): JSX.Element {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	let emailInputProps = {
		formControlProps: {
			label: 'Email',
			isRequired: true
		},
		inputProps: {
			value: email,
		},
		onChange: handleEmailChange
	}

	let passwordInputProps = {
		formControlProps: {
			label: 'Password',
			isRequired: true
		},
		inputProps: {
			value: password,
		},
		onChange: handlePasswordChange
	}

		return (
	<FormControl>
		<EmailInput {...emailInputProps}/>
		<PasswordInput {...passwordInputProps}/>
	</FormControl>
	)
}