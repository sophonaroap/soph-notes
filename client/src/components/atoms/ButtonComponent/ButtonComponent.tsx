import {Button, useStyleConfig} from '@chakra-ui/react'
import {TButtonComponentProps} from '../types'

export default function ButtonComponent(props: TButtonComponentProps): JSX.Element {
	const {variant, ...rest} = props

	let styles = useStyleConfig('ButtonComponent', {variant})

	return (
		<Button __css={styles} {...rest} />
	)
}
