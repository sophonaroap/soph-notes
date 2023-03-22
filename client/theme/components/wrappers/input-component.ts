export const InputComponent = {
	baseStyle: {
		field: {
			color: 'red.500',
		},
	},
	variants: {
		login: {
			addon: {
				borderRadius: "0",
			},
			field: {
				borderRadius: "0",
			},
			element: {
				borderRadius: "0",
			}
		}
	},
	defaultProps: {
		variant: "login"
	}
}