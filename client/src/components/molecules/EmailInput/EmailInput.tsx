import {FormControl, FormLabel} from "@chakra-ui/react"
import InputComponent from "../../atoms/InputComponent"
import {TEmailInputProps} from "../types"

export default function EmailInput(props: TEmailInputProps): JSX.Element {
	return (
		<FormControl {...props.formControlProps}>
			{props.formControlProps && props.formControlProps.label && <FormLabel>{props.formControlProps.label}</FormLabel>}
			<InputComponent type='email' {...props.inputProps} onChange={props.onChange} />
		</FormControl>
	)
}