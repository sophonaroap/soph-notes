import {extendTheme} from "@chakra-ui/react";

import {colors} from "./colors"
import {fonts} from "./fonts"
import {styles} from "./styles"

import {InputComponent} from "./components/wrappers/input-component";

const overrides = {
	colors,
	fonts,
	styles,
	InputComponent
}

let theme = extendTheme(overrides)

export default theme