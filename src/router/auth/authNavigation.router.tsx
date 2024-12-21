import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPassword from '@screens/auth/forgot-password/ForgotPassword'
import RecoveryPassword from '@screens/auth/recovery-password/RecoveryPassword'
import SignIn from '@screens/auth/signin/SignIn'
import SignUp from '@screens/auth/signup/SignUp'
import Boarding from '@screens/onBoarding/Boarding'
import { useOnboardingStore } from '@store/firstOpen'
import type React from 'react'
import { useEffect } from 'react'

export const AuthNavigation: React.FC = () => {
	const Stack = createNativeStackNavigator()
	const { isFirstOpen, checkFirstOpen } = useOnboardingStore()

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const initialize = async () => {
			await checkFirstOpen()
		}
		initialize()
	}, [])
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{isFirstOpen ? (
				<Stack.Screen name="OnBoarding" component={Boarding} />
			) : (
				<Stack.Screen name="SignIn" component={SignIn} />
			)}
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
			<Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
		</Stack.Navigator>
	)
}

export default AuthNavigation
