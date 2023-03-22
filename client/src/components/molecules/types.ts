import {FormControlProps} from '@chakra-ui/react'
import {ChangeEventHandler} from 'react'
import {TInputComponentProps} from '../atoms/types'

export type TEmailInputProps = {
	formControlProps?: FormControlProps
	inputProps?: TInputComponentProps
	initialValue?: string
	onChange: ChangeEventHandler<HTMLInputElement>
}

export type TPasswordInputProps = {
	formControlProps?: FormControlProps
	inputProps?: TInputComponentProps
	initialValue?: string
	onChange: ChangeEventHandler<HTMLInputElement>
	showPassword?: boolean
	onClickShowPassword?: () => void
}
