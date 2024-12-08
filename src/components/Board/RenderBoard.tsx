//@ts-nocheck
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { Container, ContainerImagem, Imagem, Text, Title } from './style'

interface IBoard {
	image: string
	title: string
	text: string
}

export const RenderBoard: React.FC<IBoard> = ({ image, text, title }) => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<Container>
			<ContainerImagem $large={large}>
				<Imagem source={image} />
			</ContainerImagem>

			<Title $large={large}>{title}</Title>

			<Text $large={large}>{text}</Text>
		</Container>
	)
}

export default RenderBoard
