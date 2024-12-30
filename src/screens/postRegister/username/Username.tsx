import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ComponentToast, { TypeToast } from '@components/Toast/Toast'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { useConfUserPreview } from '@store/confUserPreview'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Container, Space, Warning } from './style'

export const Username: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [displayMessage, setDisplayMessage] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const navigation = useNavigation()

	const { user, updateUser } = useConfUserPreview()

	const handleInputChange = (value: string) => {
		updateUser({ ...user, name: value })
	}

	const verifyInputValue = () => {
		if (user.name === '') {
			setMessage('Campo inválido')
			setDisplayMessage(true)
			return
		}
		navigate()
	}

	const navigate = () => {
		navigation.navigate('Seus Interesses' as never)
	}

	setTimeout(() => {
		setDisplayMessage(false)
	}, 5000)

	return (
		<ComponentContainer large={large}>
			{displayMessage && (
				<ComponentToast
					text={message}
					type={TypeToast.info}
					mt={large ? 10 : 10}
				/>
			)}
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
							value={user.name}
						/>
					</ConmponentForm>

					<Container $large={large}>
						<ComponentButton
							text="Próximo"
							large={large}
							onPress={verifyInputValue}
						/>
					</Container>
				</Space>
			</TouchableWithoutFeedback>
		</ComponentContainer>
	)
}

export default Username
