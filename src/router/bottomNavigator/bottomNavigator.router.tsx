import Header from '@components/Header/Header'
import { Close, HomeIcon, LeftArrow, Person, Search } from '@icons/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import Home from '@screens/home'
import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native'

const Tab = createBottomTabNavigator()

const titles = {
	Perguntas: 'Perguntas',
	Blog: 'Blog',
	Posts: 'Posts',
	Tags: 'Tags',
	Pessoas: 'Pessoas',
}

export const TopHome: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				header: () => {
					return <Header bottom={false} />
				},
				tabBarStyle: {
					position: 'absolute',
					top: 70,
					shadowColor: theme.colors.greyScale.offWhite,
					backgroundColor: theme.colors.greyScale.offWhite,
					borderTopWidth: 0,
					borderWidth: 1,
				},
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => (
					<View
						style={{
							flex: 1,
							width: '100%',
							borderWidth: 1,
							borderTopColor: 'transparent',
							borderLeftColor: 'transparent',
							borderRightColor: 'transparent',
							borderBottomColor: focused ? '#000' : 'transparent',
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								marginTop: 5,
								fontFamily: `${theme.fonts.montserrat.semiBold}`,
								fontSize: 14,
								color: focused
									? `${theme.colors.greyScale.eerieBlack}`
									: `${theme.colors.greyScale.frenchGray}`,
							}}
						>
							{titles[route.name]}
						</Text>
					</View>
				),
				tabBarIconStyle: {
					width: large ? 210 : 165,
					height: 44,
					justifyContent: 'center',
					alignItems: 'center',
				},
			})}
		>
			<Tab.Screen name="Perguntas" component={Home} />
			<Tab.Screen name="Blog" component={Home} />
		</Tab.Navigator>
	)
}

export const TopSearch: React.FC = () => {
	const navigate = useNavigation()

	const [large, setLarge] = useState<boolean>(false)

	const [value, setInput] = useState<string>('')

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					position: 'absolute',
					top: large ? 120 : 90,
					left: 0,
					right: 0,
					zIndex: 999,
					borderTopWidth: 0,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderBottomWidth: 0.8,
					borderColor: theme.colors.greyScale.dimGray,
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<TextInput
					placeholder="Pesquisar"
					style={{
						paddingLeft: 45,
						fontFamily: theme.fonts.hind.regular,
						fontSize: large ? 16 : 13,
						width: '90%',
					}}
					placeholderTextColor={theme.colors.greyScale.dimGray}
					onChangeText={(value) => setInput(value)}
				/>
				<View style={{ position: 'absolute', left: 16 }}>
					<Search
						color={theme.colors.greyScale.dimGray}
						width={large ? 20 : 13}
						height={large ? 20 : 13}
					/>
				</View>
				<View style={{ display: !value ? 'none' : 'flex' }}>
					<Close color={theme.colors.greyScale.frenchGray} width={15} />
				</View>
			</View>

			<View
				style={{
					position: 'absolute',
					top: large ? 169 : 140,
					left: 0,
					right: 0,
					zIndex: 999,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderBottomWidth: 0.8,
					borderColor: theme.colors.greyScale.dimGray,
					height: large ? 145 : 105,
					display: value ? 'none' : 'flex',
				}}
			>
				<Text
					style={{
						fontFamily: theme.fonts.montserrat.semiBold,
						color: theme.colors.greyScale.eerieBlack,
						fontSize: large ? 20 : 13,
						marginTop: large ? 20 : 10,
						marginLeft: 14,
						marginBottom: large ? 20 : 10,
					}}
				>
					Pesquisas Recentes
				</Text>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginLeft: 14,
						marginRight: 14,
						marginBottom: large ? 15 : 10,
					}}
				>
					<Search
						color={theme.colors.greyScale.dimGray}
						width={large ? 20 : 10}
						height={large ? 20 : 10}
					/>
					<Text
						style={{
							width: '87%',
							marginLeft: 10,
							fontFamily: theme.fonts.hind.regular,
							fontSize: large ? 16 : 13,
						}}
					>
						Figma
					</Text>
					<Close
						color={theme.colors.greyScale.dimGray}
						width={large ? 15 : 10}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginLeft: 14,
						marginRight: 14,
						marginBottom: 15,
					}}
				>
					<Search
						color={theme.colors.greyScale.dimGray}
						width={large ? 20 : 10}
						height={large ? 20 : 10}
					/>
					<Text
						style={{
							width: '87%',
							marginLeft: 10,
							fontFamily: theme.fonts.hind.regular,
							fontSize: large ? 16 : 13,
						}}
					>
						Figma
					</Text>
					<Close
						color={theme.colors.greyScale.dimGray}
						width={large ? 15 : 10}
					/>
				</View>
			</View>

			<Tab.Navigator
				screenOptions={({ route }) => ({
					header: () => {
						return (
							<Header
								bottom={true}
								component={
									<View
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											margin: large ? 20 : 10,
											gap: 5,
										}}
									>
										<TouchableOpacity onPress={() => navigate.goBack()}>
											<LeftArrow width={25} height={large ? 25 : 20} />
										</TouchableOpacity>
										<Text
											style={{
												fontSize: large ? 20 : 14,
												fontFamily: theme.fonts.montserrat.semiBold,
												color: theme.colors.greyScale.eerieBlack,
											}}
										>
											Pesquisa
										</Text>
									</View>
								}
							/>
						)
					},
					tabBarStyle: {
						position: 'absolute',
						top: large ? 170 : 140,
						shadowColor: theme.colors.greyScale.offWhite,
						backgroundColor: theme.colors.greyScale.offWhite,
						borderTopWidth: 0,
						zIndex: 1,
						borderWidth: 1,
						display: !value ? 'none' : 'flex',
						height: 44,
					},
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								flex: 1,
								width: '100%',
								borderWidth: 1,
								borderTopColor: 'transparent',
								borderLeftColor: 'transparent',
								borderRightColor: 'transparent',
								borderBottomColor: focused ? '#000' : 'transparent',
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									marginTop: 5,
									fontFamily: `${theme.fonts.montserrat.semiBold}`,
									color: focused
										? `${theme.colors.greyScale.eerieBlack}`
										: `${theme.colors.greyScale.frenchGray}`,
									fontSize: large ? 16 : 13,
								}}
							>
								{titles[route.name]}
							</Text>
						</View>
					),
					tabBarIconStyle: {
						width: large ? 104 : 85,
						height: 40,
						justifyContent: 'center',
						alignItems: 'center',
					},
				})}
			>
				<Tab.Screen name="Perguntas" component={Home} />
				<Tab.Screen name="Posts" component={Home} />
				<Tab.Screen name="Tags" component={Home} />
				<Tab.Screen name="Pessoas" component={Home} />
			</Tab.Navigator>
		</View>
	)
}

export const Bottom: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: theme.colors.greyScale.eerieBlack,
				},
				tabBarShowLabel: false,
				tabBarIconStyle: {
					marginTop: 5,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={TopHome}
				options={{
					tabBarIcon({ focused, size }) {
						return (
							<HomeIcon
								color={focused ? theme.colors.primary : '#fff'}
								width={large ? 23 : 15}
								height={large ? 23 : 15}
							/>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={TopSearch}
				options={{
					tabBarIcon({ focused, size }) {
						return (
							<Search
								color={focused ? theme.colors.primary : '#fff'}
								width={large ? 20 : 20}
								height={large ? 20 : 15}
							/>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Person"
				component={TopHome}
				options={{
					tabBarIcon({ focused, size }) {
						return (
							<Person
								color={focused ? theme.colors.primary : '#fff'}
								width={large ? 29 : 20}
								height={large ? 29 : 20}
							/>
						)
					},
				}}
			/>
		</Tab.Navigator>
	)
}

export default Bottom
