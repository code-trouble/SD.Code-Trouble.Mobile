/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Auth, { AuthType } from '@screens/auth'
import Boarding from '@screens/boarding/Boarding'
import type React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './types/theme'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView />
			<StatusBar />
			{/* <Auth type={AuthType.RecoveryPassword} /> */}
			<Boarding />
		</ThemeProvider>
	)
}

export default App
