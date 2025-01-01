/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import FabButton from '@components/FabButton/FabButton'
import { NavigationContainer } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Router from './router'
import { theme } from './types/theme'

function App(): React.JSX.Element {
	const { updateBreak } = useBreakpointGlobal()

	useEffect(() => {
		if (breakpoints() > 700) updateBreak(true)
	}, [updateBreak])

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView />
			<StatusBar />
			<NavigationContainer>
				<Router />
			</NavigationContainer>
			{/* <FabButton /> */}
		</ThemeProvider>
	)
}

export default App
