import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react'

import {colors} from './colors'
import {styles} from './styles'

import {InputComponent} from './components/wrappers/input-component'
import {ButtonComponent} from './components/wrappers/button-component'

const overrides = {
	colors,
	styles,
	components: {
		InputComponent,
		ButtonComponent
	},
}

let theme = extendTheme(overrides, withDefaultColorScheme({colorScheme: 'brand'}))

export default theme
