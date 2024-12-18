import { Attention, Check, Danger, Info } from '@icons/index'
import { theme } from '@theme/theme'
import type React from 'react'
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { Container, ContainerIcon, Horizontal, Text } from './style'

interface IToast {
	text: string
	type: TypeToast
}

enum TypeToast {
	danger = 'danger',
	sucess = 'sucess',
	warning = 'warning',
	info = 'info',
}

export const ComponentToast: React.FC<IToast> = ({ text, type }) => {
	const position = useRef(new Animated.Value(300)).current

	let component: React.ReactNode = null
	let backgroundColor = ''

	switch (type) {
		case 'danger':
			component = <Danger />
			backgroundColor = theme.colors.semanticColors.danger.danger
			break

		case 'sucess':
			component = <Check />
			backgroundColor = theme.colors.semanticColors.sucess.sucess
			break

		case 'warning':
			component = <Attention />
			backgroundColor = theme.colors.semanticColors.warn.warn
			break

		case 'info':
			component = <Info />
			backgroundColor = theme.colors.semanticColors.info.info
			break

		default:
			break
	}

	useEffect(() => {
		Animated.timing(position, {
			toValue: -10,
			duration: 500,
			useNativeDriver: false,
		}).start()

		const timeout = setTimeout(() => {
			Animated.timing(position, {
				toValue: 300,
				duration: 500,
				useNativeDriver: false,
			}).start()
		}, 3000)

		return () => clearTimeout(timeout)
	}, [position])

	return (
		<Animated.View style={{ transform: [{ translateX: position }] }}>
			<Container>
				<Horizontal>
					<ContainerIcon $color={backgroundColor}>{component}</ContainerIcon>
					<Text>{text}</Text>
				</Horizontal>
			</Container>
		</Animated.View>
	)
}

export default ComponentToast