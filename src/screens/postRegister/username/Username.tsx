import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Container, Space, Warning } from './style'

export const Username: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [inputValue, setInputValue] = useState<string>('')
	const navigation = useNavigation()

	const handleInputChange = (value: string) => {
		setInputValue(value)
	}

	const navigate = () => {
		navigation.navigate('Seus Interesses' as never)
	}

	return (
		<ComponentContainer large={large}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<Space $large={large}>
					<ConmponentForm>
						<ComponentContainerInput
							placeholder="Username"
							valueLabel={
								<>
									Nome de usuário <Warning>*</Warning>
								</>
							}
							large={large}
							password={false}
							onInputChange={handleInputChange}
						/>
					</ConmponentForm>

					<Container $large={large}>
						<ComponentButton text="Próximo" large={large} onPress={navigate} />
					</Container>
				</Space>
			</TouchableWithoutFeedback>
		</ComponentContainer>
	)
}

export default Username
