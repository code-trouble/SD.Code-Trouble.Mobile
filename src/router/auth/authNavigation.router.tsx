import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '@screens/auth/signin/SignIn'
import SignUp from '@screens/auth/signup/SignUp'
import type React from 'react'

export const AuthNavigation: React.FC = () => {
	const Stack = createNativeStackNavigator()
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Login" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	)
}

export default AuthNavigation
