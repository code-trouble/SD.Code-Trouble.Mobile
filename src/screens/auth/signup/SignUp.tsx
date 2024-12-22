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
import { useBreakpointGlobal } from '@store/breakpointGlobal'

export const SignUp: React.FC = () => {
	const [nameValue, setNameValue] = useState<string>('')
	const [emailValue, setEmailValue] = useState<string>('')
	const [passwordValue, setPasswordValue] = useState<string>('')
	const [displayMessage, setDisplayMessage] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const large = useBreakpointGlobal((state) => state.break)

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
		} else if (!emailValue.includes('@')) {
			setMessage('Email inválido')
			setDisplayMessage(true)
		}
	}

	const teste = () => {
		console.log('teste')
	}

	setTimeout(() => {
		setDisplayMessage(false)
	}, 5000)

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView style={{ flexGrow: 1 }}>
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
									<TouchableOpacity onPress={teste}>
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
