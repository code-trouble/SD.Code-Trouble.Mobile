import ComponentButton from '@components/Button/Button'
import ComponentButtonSkip from '@components/ButtonSkip/ButtonSkip'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ProfilePhoto from '@components/ProfilePhoto/ProfilePhoto'
import SelectPicker from '@components/SelectPicker/SelectPicker'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { usePreviewStore } from '@store/firstOpenPreview'
import { ContainerBottom } from './style'

export const DetailsProfile: React.FC = () => {
	const navigation = useNavigation()
	const large = useBreakpointGlobal((state) => state.break)
	const { setFirstOpen } = usePreviewStore()

	const navigate = () => {
		navigation.navigate('Conecte suas redes' as never)
	}

	const skip = () => {
		setFirstOpen()
	}

	return (
		<ComponentContainer large={large}>
			<ProfilePhoto />

			<ConmponentForm>
				<SelectPicker mt={33} />
			</ConmponentForm>

			<ContainerBottom $large={large}>
				<ComponentButton large={large} text="Próximo" onPress={navigate} />
				<ComponentButtonSkip large={large} text="Pular" onPress={skip} />
			</ContainerBottom>
		</ComponentContainer>
	)
}

export default DetailsProfile
