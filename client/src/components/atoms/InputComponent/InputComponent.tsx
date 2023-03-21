import {Input, useStyleConfig} from "@chakra-ui/react";
import {TInputComponentProps} from "../types";

export default function InputComponent(props: TInputComponentProps): JSX.Element {
	const { variant, ...rest } = props

	let styles = useStyleConfig('InputComponent', { variant })

	return (
		<Input __css={styles} {...rest} />
	)
}