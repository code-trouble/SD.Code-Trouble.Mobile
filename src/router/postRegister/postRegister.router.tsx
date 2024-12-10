import HeaderPostRegister from '@components/HeaderPostRegister/HeaderPostRegister'
import { getHeaderTitle } from '@react-navigation/elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsProfile from '@screens/postRegister/detailsProfile/DetailsProfile'
import Interests from '@screens/postRegister/interests/Interests'
import { SocialMedia } from '@screens/postRegister/socialMedia/SocialMedia'
import Username from '@screens/postRegister/username/Username'
import type React from 'react'

export const PostRegisterRouter: React.FC = () => {
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Insira seu username"
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
			<Stack.Screen
				name="Seus Interesses"
				component={Interests}
				options={{
					header: ({ options, route }) => {
						const title = getHeaderTitle(options, route.name)
						return (
							<HeaderPostRegister title={title} back={true} percentage={35} />
						)
					},
				}}
			/>
			<Stack.Screen
				name="Detalhes do Perfil"
				component={DetailsProfile}
				options={{
					header: ({ options, route }) => {
						const title = getHeaderTitle(options, route.name)
						return (
							<HeaderPostRegister title={title} back={true} percentage={50} />
						)
					},
				}}
			/>
			<Stack.Screen
				name="Conecte suas redes"
				component={SocialMedia}
				options={{
					header: ({ options, route }) => {
						const title = getHeaderTitle(options, route.name)
						return (
							<HeaderPostRegister title={title} back={true} percentage={75} />
						)
					},
				}}
			/>
		</Stack.Navigator>
	)
}

export default PostRegisterRouter
