import { Italic, Plus, Post } from '@icons/index'
import { theme } from '@theme/theme'
import { useRef, useState } from 'react'
import type React from 'react'
import {
	Animated,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import {
	Container,
	ContainerFabButton,
	ContainerPlusButton,
	Horizontal,
	Text,
} from './style'

export const FabButton: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const animation = useRef(new Animated.Value(0)).current

	const toggleMenu = () => {
		const toValue = open ? 0 : 1

		Animated.spring(animation, {
			toValue: toValue,
			friction: 6,
			useNativeDriver: true,
		}).start()

		setOpen(!open)
	}

	const postStyle = {
		transform: [
			{
				scale: animation,
			},
			{
				translateY: animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -110],
				}),
			},
		],
	}

	const questionStyle = {
		transform: [
			{
				scale: animation,
			},
			{
				translateY: animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -175],
				}),
			},
		],
	}

	const rotation = {
		transform: [
			{
				rotate: animation.interpolate({
					inputRange: [0, 1],
					outputRange: ['0deg', '45deg'],
				}),
			},
		],
	}

	return (
		<>
			<Modal
				transparent
				visible={open}
				animationType="fade"
				onRequestClose={toggleMenu}
			>
				<TouchableWithoutFeedback onPress={toggleMenu}>
					<View
						style={{
							flex: 1,
							backgroundColor: 'rgba(0, 0, 0, 0.7)',
							justifyContent: 'flex-end',
						}}
					>
						<TouchableWithoutFeedback>
							<Horizontal>
								<Text style={questionStyle}>Escrever Pergunta</Text>
								<ContainerFabButton
									$backgroundColor="#fff"
									style={questionStyle}
								>
									<Italic color="#000" width={20} height={20} />
								</ContainerFabButton>
							</Horizontal>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback>
							<Horizontal>
								<Text style={postStyle}>Escrever Post</Text>
								<ContainerFabButton $backgroundColor="#fff" style={postStyle}>
									<Post color="#000" width={20} height={20} />
								</ContainerFabButton>
							</Horizontal>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<TouchableWithoutFeedback onPress={toggleMenu}>
				<ContainerPlusButton
					$backgroundColor={theme.colors.primary}
					$ml={125}
					style={rotation}
				>
					<Plus color="#fff" width={25} height={25} />
				</ContainerPlusButton>
			</TouchableWithoutFeedback>
		</>
	)
}

export default FabButton
