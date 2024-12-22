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
import ComponentToast, { TypeToast } from '@components/Toast/Toast'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'

export const ForgotPassword: React.FC = () => {
	const [emailValue, setEmailValue] = useState<string>('')
	const large = useBreakpointGlobal((state) => state.break)
	const [displayMessage, setDisplayMessage] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const navigate = useNavigation()

	const handleInputEmail = (value: string) => {
		setEmailValue(value)
	}

	const navigation = () => {
		navigate.goBack()
	}

	const validateInput = () => {
		if (emailValue === '') {
			setMessage('Campos inválidos')
			setDisplayMessage(true)
			return
		}
		if (!emailValue.includes('@')) {
			setMessage('Email inválido')
			setDisplayMessage(true)
			return
		}

		navigate.navigate('RecoveryPassword' as never)
	}

	setTimeout(() => {
		setDisplayMessage(false)
	}, 5000)

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView
				style={{
					flexGrow: 1,
					backgroundColor: theme.colors.greyScale.offWhite,
				}}
			>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<ComponentContainer large={large}>
						{displayMessage && (
							<ComponentToast
								text={message}
								type={TypeToast.warning}
								mt={large ? 60 : 45}
							/>
						)}
						<ComponentLogo />

						<ConmponentForm>
							<ComponentTitle large={large}>Esqueceu sua senha?</ComponentTitle>

							<ComponentContainerInput
								large={large}
								password={false}
								placeholder="Digite seu email"
								valueLabel="Email"
								onInputChange={handleInputEmail}
							/>

							<InfoText $large={large}>
								Enviaremos um e-mail para a recuperação da sua senha.
							</InfoText>

							<ContainerBottom $large={large}>
								<ComponentButton
									large={large}
									text="Enviar"
									onPress={validateInput}
								/>

								<ContainerAccount>
									<Account $large={large}>Voltar ao</Account>
									<TouchableOpacity onPress={navigation}>
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
