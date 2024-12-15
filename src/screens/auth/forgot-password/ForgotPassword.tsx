import type React from 'react'
import { useEffect, useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import {
	Account,
	ContainerAccount,
	ContainerBottom,
	InfoText,
	TextAccount,
} from './style'

import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ComponentLogo from '@components/Logo/Logo'
import ComponentTitle from '@components/Title/Title'
import breakpoints from '@utils/dimensons'

export const ForgotPassword: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>('')

	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	const handleInputChange = (value: string) => {
		setInputValue(value)
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView style={{ flexGrow: 1 }}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<ComponentContainer large={large}>
						<ComponentLogo />

						<ConmponentForm>
							<ComponentTitle large={large}>Esqueceu sua senha?</ComponentTitle>

							<ComponentContainerInput
								large={large}
								password={false}
								placeholder="Digite seu email"
								valueLabel="Email"
								onInputChange={handleInputChange}
							/>

							<InfoText $large={large}>
								Enviaremos um e-mail para a recuperação da sua senha.
							</InfoText>

							<ContainerBottom $large={large}>
								<ComponentButton large={large} text="Enviar" />

								<ContainerAccount>
									<Account $large={large}>Voltar ao</Account>
									<TouchableOpacity>
										<TextAccount $large={large}>Login</TextAccount>
									</TouchableOpacity>
								</ContainerAccount>
							</ContainerBottom>
						</ConmponentForm>
					</ComponentContainer>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ForgotPassword
