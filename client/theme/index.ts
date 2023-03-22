import {extendTheme} from "@chakra-ui/react";

import {colors} from "./colors"

import {InputComponent} from "./components/wrappers/input-component";

const overrides = {
	colors,
	components: {
		InputComponent
	}
}

let theme = extendTheme(overrides)

export default theme