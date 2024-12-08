import HeaderPostRegister from '@components/HeaderPostRegister/HeaderPostRegister'
import { getHeaderTitle } from '@react-navigation/elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Username from '@screens/postRegister/username/Username'
import type React from 'react'

export const PostRegisterRouter: React.FC = () => {
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Insira seu nome"
				component={Username}
				options={{
					header: ({ options, route }) => {
						const title = getHeaderTitle(options, route.name)
						return (
							<HeaderPostRegister title={title} back={false} percentage={25} />
						)
					},
				}}
			/>
		</Stack.Navigator>
	)
}

export default PostRegisterRouter
