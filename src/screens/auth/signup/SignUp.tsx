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
	ContainerDivider,
	Divider,
	Label,
	TextAccount,
} from './style'

import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ComponentLogo from '@components/Logo/Logo'
import ComponentTitle from '@components/Title/Title'
import ComponentToast, { TypeToast } from '@components/Toast/Toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'

export const SignUp: React.FC = () => {
	const [nameValue, setNameValue] = useState<string>('')
	const [emailValue, setEmailValue] = useState<string>('')
	const [passwordValue, setPasswordValue] = useState<string>('')
	const [displayMessage, setDisplayMessage] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const [type, setType] = useState<string>()
	const large = useBreakpointGlobal((state) => state.break)
	const navigate = useNavigation()

	const handleInputName = (value: string) => {
		setNameValue(value)
	}

	const handleInputEmail = (value: string) => {
		setEmailValue(value)
	}

	const handleInputPassword = (value: string) => {
		setPasswordValue(value)
	}

	const valideInputs = () => {
		if (nameValue === '' || emailValue === '' || passwordValue === '') {
			setMessage('Campos inválidos')
			setDisplayMessage(true)
			setType('warning')
		} else if (!emailValue.includes('@')) {
			setMessage('Email inválido')
			setDisplayMessage(true)
		}

		registerUser()
	}

	const registerUser = async () => {
		if ((await verifyUser()) == null) {
			await AsyncStorage.setItem(
				`user_${emailValue}`,
				JSON.stringify({ nameValue, emailValue, passwordValue }),
			)
				.then(() => {
					setMessage('Cadastro Realizado')
					setType('sucess')
					setDisplayMessage(true)
					setTimeout(() => {
						navigation()
					}, 2000)
				})
				.catch(() => {
					setMessage('Erro no cadastro')
					setType('warning')
					setDisplayMessage(true)
				})
			return
		}

		setMessage('Email existente')
		setType('warning')
		setDisplayMessage(true)
	}

	const verifyUser = async (): Promise<object | undefined> => {
		const user = await AsyncStorage.getItem(`user_${emailValue}`)
		console.log(JSON.parse(user))
		return JSON.parse(user)
	}

	const navigation = () => {
		navigate.goBack()
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
							<ComponentToast text={message} type={type} mt={large ? 60 : 45} />
						)}
						<ComponentLogo />

						<ConmponentForm>
							<ComponentTitle large={large}>Cadastro</ComponentTitle>

							<ComponentContainerInput
								large={large}
								valueLabel="Nome Social"
								password={false}
								placeholder="Digite seu nome"
								onInputChange={handleInputName}
							/>

							<ComponentContainerInput
								large={large}
								valueLabel="Email"
								password={false}
								placeholder="Digite seu email"
								onInputChange={handleInputEmail}
							/>

							<ComponentContainerInput
								large={large}
								valueLabel="Senha"
								password={true}
								placeholder="******"
								onInputChange={handleInputPassword}
							/>

							<ContainerBottom $large={large}>
								<ComponentButton
									large={large}
									text="Criar Conta"
									onPress={valideInputs}
								/>

								<ContainerDivider>
									<Divider />

									<Label $large={large}>OU</Label>

									<Divider />
								</ContainerDivider>

								<ContainerAccount>
									<Account $large={large}>Já possui uma conta?</Account>
									<TouchableOpacity onPress={navigation}>
										<TextAccount $large={large}>Faça login aqui.</TextAccount>
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

export default SignUp
