import {Button, useStyleConfig} from "@chakra-ui/react";

export default function ButtonComponent(props: any): JSX.Element {
	const { variant, ...rest } = props

	let styles = useStyleConfig('ButtonComponent', { variant })

	return (
		<Button __css={styles} {...rest} />
	)
}