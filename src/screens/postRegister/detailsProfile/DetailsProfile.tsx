import ComponentButton from '@components/Button/Button'
import ComponentButtonSkip from '@components/ButtonSkip/ButtonSkip'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ProfilePhoto from '@components/ProfilePhoto/ProfilePhoto'
import SelectPicker from '@components/SelectPicker/SelectPicker'
import { useNavigation } from '@react-navigation/native'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { ContainerBottom } from './style'

export const DetailsProfile: React.FC = () => {
	const navigation = useNavigation()

	const navigate = () => {
		navigation.navigate('Conecte suas redes' as never)
	}
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<ComponentContainer large={large}>
			<ProfilePhoto />

			<ConmponentForm>
				<SelectPicker />
			</ConmponentForm>

			<ContainerBottom $large={large}>
				<ComponentButton large={large} text="Próximo" onPress={navigate} />
				<ComponentButtonSkip large={large} text="Pular" />
			</ContainerBottom>
		</ComponentContainer>
	)
}

export default DetailsProfile
