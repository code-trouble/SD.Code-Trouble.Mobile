import { AddBookmark, Hide, Logo, Show } from '@icons/index.ts'
import type React from 'react'
import { useEffect, useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import {
	Account,
	Container,
	ContainerAccount,
	ContainerBottom,
	ContainerButton,
	ContainerDivider,
	ContainerForgot,
	ContainerForm,
	ContainerIcon,
	ContainerInput,
	ContainerLogo,
	Divider,
	ForgotPasswordText,
	InfoText,
	Label,
	TextAccount,
	TextButton,
	TextInput,
	Title,
} from './style'

import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'

export const ForgotPassword: React.FC = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const [large, setLarge] = useState<boolean>(false)
	const [marginTopBehavior, setMarginTopBehavior] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView style={{ flexGrow: 1 }}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<Container $large={large}>
						<ContainerLogo $large={large}>
							<Logo width={large ? 149 : 96} />
						</ContainerLogo>

						<ContainerForm>
							<Title $large={large}>Esqueceu sua senha?</Title>

							<ContainerInput>
								<Label $large={large}>Email</Label>

								<TextInput
									placeholder="Digite seu email"
									keyboardType="default"
									$large={large}
								/>
							</ContainerInput>

							<InfoText $large={large}>
								Enviaremos um e-mail para a recuperação da sua senha.
							</InfoText>

							<ContainerBottom $large={large}>
								<TouchableOpacity>
									<ContainerButton $large={large}>
										<TextButton $large={large}>Enviar</TextButton>
									</ContainerButton>
								</TouchableOpacity>

								<ContainerAccount>
									<Account $large={large}>Voltar ao</Account>
									<TouchableOpacity>
										<TextAccount $large={large}>Login</TextAccount>
									</TouchableOpacity>
								</ContainerAccount>
							</ContainerBottom>
						</ContainerForm>
					</Container>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ForgotPassword
