import {Button, useStyleConfig} from '@chakra-ui/react'
import {TButtonComponentProps} from '../types'

export default function ButtonComponent(props: TButtonComponentProps): JSX.Element {
	const {variant, size, colorScheme, ...rest} = props

	let styles = useStyleConfig('ButtonComponent', {variant, size, colorScheme})

	return (
	  <Button __css={styles} {...rest} />
	)
}
