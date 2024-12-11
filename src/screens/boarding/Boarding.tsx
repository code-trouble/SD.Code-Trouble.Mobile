import RenderBoard from '@components/Board/RenderBoard'
import { CompactLogo, NextButton } from '@icons/index'
import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'
import { useEffect, useRef, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Container, ContainerLogo, Done, Skip, TextDone } from './style'

export const Boarding: React.FC = () => {
	const [color, setColor] = useState<string>(theme.colors.primary)
	const [large, setLarge] = useState<boolean>(false)
	const sliderRef = useRef<AppIntroSlider>(null)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	const slides = [
		{
			key: '1',
			title: 'Bem vindo a Code Trouble.',
			text: 'Uma comunidade para colaborar e compartilhar, de devs para devs',
			image: large
				? require('../../assets/images/board1.png')
				: require('../../assets/images/smallBoard1.png'),
			color: `${theme.colors.primary}`,
		},
		{
			key: '2',
			title: 'Faça perguntas, encontre Respostas',
			text: 'Nossa rede é focada em ajudar, aprender e ensinar.',
			image: large
				? require('../../assets/images/board2.png')
				: require('../../assets/images/smallBoard2.png'),
			color: `${theme.colors.accent}`,
		},
		{
			key: '3',
			title: 'Leia, escreva e compartilhe posts do nosso Blog!',
			text: 'Escreva sobre o que te inspira e divulgue na nossa plataforma.',
			image: large
				? require('../../assets/images/board3.png')
				: require('../../assets/images/smallBoard3.png'),
			color: `${theme.colors.secondary}`,
		},
	]

	const handleSlideChange = (index: number) => {
		setColor(slides[index].color)
	}

	const handleSkip = () => {
		const lastSlideIndex = slides.length - 1
		setColor(slides[lastSlideIndex].color)
		sliderRef.current?.goToSlide(lastSlideIndex)
	}

	return (
		<Container>
			<ContainerLogo $large={large}>
				<CompactLogo color={color} width={large ? 60 : 36} />
			</ContainerLogo>
			<AppIntroSlider
				data={slides}
				ref={sliderRef}
				renderItem={({ item }) => (
					<RenderBoard image={item.image} text={item.text} title={item.title} />
				)}
				activeDotStyle={{
					backgroundColor: color,
					width: large ? 27 : 20,
				}}
				renderNextButton={() => (
					<NextButton color={color} width={large ? 44 : 30} />
				)}
				showSkipButton={true}
				renderSkipButton={() => (
					<Skip $color={color} onPress={handleSkip} $large={large}>
						Pular
					</Skip>
				)}
				onSlideChange={handleSlideChange}
				renderDoneButton={() => (
					<Done $large={large}>
						<TextDone $large={large}>Entrar e Começar</TextDone>
					</Done>
				)}
				onDone={() => console.log('finalizado')}
			/>
		</Container>
	)
}

export default Boarding
