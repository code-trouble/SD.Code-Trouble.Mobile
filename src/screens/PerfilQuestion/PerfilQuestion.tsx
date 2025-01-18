import FabButton from '@components/FabButton/FabButton'
import ListQuestion from '@components/ListQuestion/ListQuestion'
import { scrollYVertical } from '@store/scrolly'
import type React from 'react'
import { useEffect, useRef } from 'react'
import { Animated, ScrollView } from 'react-native'
import { Container } from './style'

function PerfilQuestion(): React.JSX.Element {
	const scrollY = useRef(new Animated.Value(0)).current // UseRef para evitar recriação
	const { updateScroll } = scrollYVertical() // Hook da Zustand para acessar updateScroll

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		scrollY.addListener(({ value }) => updateScroll(value))
	}, [scrollY])

	return (
		<Container>
			<Animated.View
				style={{
					backgroundColor: '#000',
					position: 'absolute',
					top: 0,
					width: '100%',
					minHeight: 50,
					height: scrollY.interpolate({
						inputRange: [10, 160, 185],
						outputRange: [140, 20, 0],
						extrapolate: 'clamp',
					}),
					opacity: scrollY.interpolate({
						inputRange: [1, 75, 170],
						outputRange: [1, 1, 0],
						extrapolate: 'clamp',
					}),
				}}
			/>
			<ScrollView
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									y: scrollY,
								},
							},
						},
					],
					{ useNativeDriver: false },
				)}
			>
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
			</ScrollView>
			<FabButton />
		</Container>
	)
}

export default PerfilQuestion
