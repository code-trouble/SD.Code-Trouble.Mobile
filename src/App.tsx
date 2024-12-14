/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Header from '@components/Header/Header'
import { NavigationContainer } from '@react-navigation/native'
import Auth, { AuthType } from '@screens/auth'
import Boarding from '@screens/boarding/Boarding'
import type React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Bottom from './router/bottomNavigator/bottomNavigator.router'
import PostRegisterRouter from './router/postRegister/postRegister.router'
import { theme } from './types/theme'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView />
			<StatusBar />
			{/* <Auth type={AuthType.ForgotPassword} /> */}
			{/* <Boarding /> */}
			{/* <Username /> */}
			<NavigationContainer>
				{/* <PostRegisterRouter /> */}
				<Bottom />
			</NavigationContainer>
			{/* <Header /> */}
		</ThemeProvider>
	)
}

export default App
