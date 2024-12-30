import ComponentButton from '@components/Button/Button'
import ComponentButtonSkip from '@components/ButtonSkip/ButtonSkip'
import Check from '@components/Check/Check'
import ComponentContainer from '@components/Container/Container'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { usePreviewStore } from '@store/firstOpenPreview'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Container, ContainerBottom } from './styles'

export const Interests: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const { setFirstOpen } = usePreviewStore()

	const navigation = useNavigation()

	const navigate = () => {
		navigation.navigate('Detalhes do Perfil' as never)
	}

	const skip = () => {
		setFirstOpen()
	}

	return (
		<ComponentContainer large={large}>
			<Container $large={large}>
				<Check text="UX/UI Design" />

				<Check text="Arte" />

				<Check text="Desenvolvimento Mobile" />

				<Check text="Pyhton" />

				<Check text="Design" />

				<Check text="Desenvolvimento Web" />

				<Check text="IA" />

				<Check text="DevOps" />

				<Check text="JavaScript Web" />

				<Check text="Design Gráfico" />

				<Check text="Software" />

				<Check text="SQL" />

				<Check text="Design de Produto" />

				<Check text="Networking" />

				<Check text="Programação" />
			</Container>

			<ContainerBottom $large={large}>
				<ComponentButton large={large} text="Próximo" onPress={navigate} />
				<ComponentButtonSkip large={large} text="Pular" onPress={skip} />
			</ContainerBottom>
		</ComponentContainer>
	)
}

export default Interests
