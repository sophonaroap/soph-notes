import {useState} from 'react'
import {FormControl, FormLabel, IconButton, InputGroup, InputRightElement} from '@chakra-ui/react'
import InputComponent from '../../atoms/InputComponent'
import {TPasswordInputProps} from '../types'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

export default function PasswordInput(props: TPasswordInputProps): JSX.Element {
	const [showPassword, setShowPassword] = useState<boolean>(props.showPassword || false)

	const onClickShowPassword = props.onClickShowPassword || (() => {
		const val = !showPassword
		setShowPassword(val)
	})

	let inputRightElement

	if (props.showPassword) {
		props.inputProps!['type'] = 'text'
		inputRightElement = (
			<InputRightElement>
				<IconButton aria-label='hide password' icon={<ViewOffIcon/>} onClick={onClickShowPassword}/>
			</InputRightElement>
		)
	} else {
		props.inputProps!['type'] = 'password'
		inputRightElement = (
			<InputRightElement>
				<IconButton aria-label='show password' icon={<ViewIcon/>} onClick={onClickShowPassword}/>
			</InputRightElement>
		)
	}
	return (
		<FormControl {...props.formControlProps}>
			{props.formControlProps && props.formControlProps.label &&
                <FormLabel>{props.formControlProps.label}</FormLabel>}
			<InputGroup>
				<InputComponent {...props.inputProps} onChange={props.onChange}/>
				{inputRightElement}
			</InputGroup>
		</FormControl>
	)
}
