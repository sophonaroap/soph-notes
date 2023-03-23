import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

const baseStyle = defineStyle({
	alignItems: 'center',
	appearance: 'none',
	borderRadius: 'md',
	display: 'inline-flex',
	fontWeight: 'semibold',
	justifyContent: 'center',
	lineHeight: '1.2',
	outline: '2px solid transparent',
	outlineOffset: '2px',
	position: 'relative',
	transitionDuration: 'normal',
	transitionProperty: 'common',
	userSelect: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',
	_disabled: {
		opacity: 0.4,
		cursor: 'not-allowed',
		boxShadow: 'none',
	},
	_focusVisible: {
		boxShadow: 'outline',
	},
	_hover: {
		_disabled: {
			bg: 'initial',
		},
	},
})

const variantPrimary = defineStyle((props) => {
	const {colorScheme: c} = props

	if (c === 'gray') {
		return {
			backgroundColor: 'gray.100',
			_hover: {
				bg: 'gray.200',
				_disabled: {
					backgroundColor: 'gray.100',
				},
			},
			_active: {bg: 'gray.300'},
		}
	}

	return {
		backgroundColor: c ? `${c}.500` : 'brand.200',
		color: 'white',
		_hover: {
			backgroundColor: c ? `${c}.600` : 'brand.300',
			_disabled: {
				backgroundColor: c ? `${c}.500` : 'brand.200',
			}
		},
		_active: {
			backgroundColor: c ? `${c}.700` : 'brand.400',
		}
	}
})

const sizes = {
	md: {
		height: '10',
		minWidth: '10',
		fontSize: 'md',
		px: '4',
	}
}

export const ButtonComponent = defineStyleConfig({
	baseStyle,
	variants: {
		primary: variantPrimary,
	},
	sizes,
	defaultProps: {
		variant: 'primary',
		size: 'md',
		colorScheme: 'brand'
	}
})
