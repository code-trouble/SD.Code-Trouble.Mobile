/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import SignIn from './screens/auth/signin/SignIn'
import SignUp from './screens/auth/signup/SignUp'
import Home from './screens/home'
import { theme } from './types/theme'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView />
			<StatusBar />
			<SignUp />
		</ThemeProvider>
	)
}

export default App
