import {StyleProps} from '@chakra-ui/react'

type TStyles = {
	[key: string]: { [key: string]: StyleProps }
}

export const styles: TStyles = {
	global: {
		body: {
			bg: 'dark_shade.800',
			height: '100vh',
			color: 'light_shade.100',
		},
	},
}
