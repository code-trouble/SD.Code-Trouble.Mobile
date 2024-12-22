/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Header from '@components/Header/Header'
import ComponentToast from '@components/Toast/Toast'
import { NavigationContainer } from '@react-navigation/native'
import Auth, { AuthType } from '@screens/auth'
import Boarding from '@screens/onBoarding/Boarding'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Router from './router'
import Bottom from './router/bottomNavigator/bottomNavigator.router'
import PostRegisterRouter from './router/postRegister/postRegister.router'
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
			{/* <Auth type={AuthType.SignUp} /> */}
			{/* <Boarding /> */}
			{/* <Username /> */}
			<NavigationContainer>
				<Router />
				{/* <PostRegisterRouter /> */}
				{/* <Bottom /> */}
			</NavigationContainer>
			{/* <Header /> */}
			{/* <ComponentToast /> */}
		</ThemeProvider>
	)
}

export default App
