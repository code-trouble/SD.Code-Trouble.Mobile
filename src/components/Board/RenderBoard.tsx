import { useBreakpointGlobal } from '@store/breakpointGlobal'
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
	const large = useBreakpointGlobal((state) => state.break)

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
