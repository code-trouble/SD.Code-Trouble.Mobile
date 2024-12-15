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
import breakpoints from '@utils/dimensons'

export const SignIn: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')

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
							<ComponentTitle large={large}>Login</ComponentTitle>

							<ComponentContainerInput
								large={large}
								password={false}
								onInputChange={handleInputChange}
								valueLabel="Email"
								placeholder="Digite seu email"
							/>

							<ComponentContainerInput
								large={large}
								password={true}
								onInputChange={handleInputChange}
								valueLabel="Senha"
								placeholder="Digite sua senha"
								lastInput={true}
							/>

							<ContainerForgot>
								<TouchableOpacity>
									<ForgotPasswordText $large={large}>
										Esqueceu a senha?
									</ForgotPasswordText>
								</TouchableOpacity>
							</ContainerForgot>

							<ContainerBottom $large={large}>
								<ComponentButton large={large} text="Entrar" />

								<ContainerDivider>
									<Divider />

									<Label $large={large}>ou</Label>

									<Divider />
								</ContainerDivider>

								<ContainerAccount>
									<Account $large={large}>Ainda não tem conta?</Account>
									<TouchableOpacity>
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
