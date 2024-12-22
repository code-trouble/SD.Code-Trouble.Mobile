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
	ContainerForgot,
	Divider,
	ForgotPasswordText,
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
import { useLoged } from '@store/userLoged'
import { theme } from '@theme/theme'

type user = {
	nameValue: string
	emailvalue: string
	passwordValue: string
}

export const SignIn: React.FC = () => {
	const [emailValue, setEmailValue] = useState<string>('')
	const [passwordValue, setPasswordValue] = useState<string>('')
	const [displayMessage, setDisplayMessage] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const [type, setType] = useState<string>()
	const [user, setUser] = useState<user>()
	const { updateLoged } = useLoged()
	const large = useBreakpointGlobal((state) => state.break)
	const navigate = useNavigation()

	const handleInputEmail = (value: string) => {
		setEmailValue(value)
	}

	const handleInputPasword = (value: string) => {
		setPasswordValue(value)
	}

	const validateInput = async () => {
		if (emailValue === '' || passwordValue === '') {
			setMessage('Campos inválidos')
			setDisplayMessage(true)
		} else if (!emailValue.includes('@')) {
			setMessage('Email inválido')
			setDisplayMessage(true)
		} else if ((await verifyUser()) == null) {
			setMessage('Email não encontrado')
			setType('warning')
			setDisplayMessage(true)
		} else {
			console.log(user)
			if (user?.passwordValue === passwordValue) {
				setMessage('Login efetuado')
				setType('sucess')
				setDisplayMessage(true)
				setTimeout(() => {
					updateLoged(true)
				}, 2000)
			}
		}
	}

	const verifyUser = async (): Promise<object | undefined> => {
		const user = await AsyncStorage.getItem(`user_${emailValue}`)
		setUser(JSON.parse(user))
		return JSON.parse(user)
	}

	const navigation = (value: string) => {
		navigate.navigate(value as never)
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
							<ComponentTitle large={large}>Login</ComponentTitle>

							<ComponentContainerInput
								large={large}
								password={false}
								onInputChange={handleInputEmail}
								valueLabel="Email"
								placeholder="Digite seu email"
							/>

							<ComponentContainerInput
								large={large}
								password={true}
								onInputChange={handleInputPasword}
								valueLabel="Senha"
								placeholder="Digite sua senha"
								lastInput={true}
							/>

							<ContainerForgot>
								<TouchableOpacity onPress={() => navigation('ForgotPassword')}>
									<ForgotPasswordText $large={large}>
										Esqueceu a senha?
									</ForgotPasswordText>
								</TouchableOpacity>
							</ContainerForgot>

							<ContainerBottom $large={large}>
								<ComponentButton
									large={large}
									text="Entrar"
									onPress={validateInput}
								/>

								<ContainerDivider>
									<Divider />

									<Label $large={large}>ou</Label>

									<Divider />
								</ContainerDivider>

								<ContainerAccount>
									<Account $large={large}>Ainda não tem conta?</Account>
									<TouchableOpacity onPress={() => navigation('SignUp')}>
										<TextAccount $large={large}>Cadastrar-se aqui</TextAccount>
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

export default SignIn
