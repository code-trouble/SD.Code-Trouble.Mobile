/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import ForgotPassword from './screens/auth/forgot-password/ForgotPassword'
import SignIn from './screens/auth/signin/SignIn'
import SignUp from './screens/auth/signup/SignUp'
import Home from './screens/home'
import { theme } from './types/theme'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView />
			<StatusBar />
			{/* <SignUp /> */}
			{/* <SignIn /> */}
			<ForgotPassword />
		</ThemeProvider>
	)
}

export default App
