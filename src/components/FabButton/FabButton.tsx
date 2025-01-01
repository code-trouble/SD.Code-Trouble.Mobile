import { Italic, Plus, Post } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'
import { useRef, useState } from 'react'
import type React from 'react'
import { Animated, Modal, TouchableWithoutFeedback, View } from 'react-native'
import {
	ContainerFabButton,
	ContainerPlusButton,
	Horizontal,
	Text,
} from './style'

export const FabButton: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const animation = useRef(new Animated.Value(0)).current
	const large = useBreakpointGlobal((state) => state.break)

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
					outputRange: [0, large ? -110 : -98],
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
					outputRange: [0, large ? -175 : -150],
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
								<Text style={questionStyle} $large={large}>
									Escrever Pergunta
								</Text>
								<ContainerFabButton
									$backgroundColor="#fff"
									style={questionStyle}
									$large={large}
								>
									<Italic
										color="#000"
										width={large ? 24 : 18}
										height={large ? 24 : 18}
									/>
								</ContainerFabButton>
							</Horizontal>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback>
							<Horizontal>
								<Text style={postStyle} $large={large}>
									Escrever Post
								</Text>
								<ContainerFabButton
									$backgroundColor="#fff"
									style={postStyle}
									$large={large}
								>
									<Post
										color="#000"
										width={large ? 22 : 18}
										height={large ? 22 : 18}
									/>
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
					$large={large}
				>
					<Plus color="#fff" width={25} height={25} />
				</ContainerPlusButton>
			</TouchableWithoutFeedback>
		</>
	)
}

export default FabButton
