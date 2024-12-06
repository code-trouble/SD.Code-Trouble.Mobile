import { Dimensions } from 'react-native'

function breakpoints() {
	const { height: screenHeight } = Dimensions.get('screen')

	return screenHeight
}

export default breakpoints
