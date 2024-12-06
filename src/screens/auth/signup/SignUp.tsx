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
	ContainerForm,
	ContainerIcon,
	ContainerInput,
	ContainerLogo,
	Divider,
	Label,
	TextAccount,
	TextButton,
	TextInput,
	Title,
} from './style'

import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'

export const SignIn: React.FC = () => {
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
							<Title $large={large}>Cadastro</Title>

							<ContainerInput>
								<Label $large={large}>Nome Social</Label>

								<TextInput
									placeholder="Digite seu nome"
									keyboardType="default"
									$large={large}
								/>
							</ContainerInput>

							<ContainerInput>
								<Label $large={large}>Email</Label>

								<TextInput
									placeholder="Digite seu email"
									keyboardType="default"
									$large={large}
								/>
							</ContainerInput>

							<ContainerInput>
								<Label $large={large}>Senha</Label>

								<TextInput
									placeholder="Digite sua senha"
									secureTextEntry={!showPassword}
									$large={large}
								/>

								<ContainerIcon $large={large}>
									<TouchableOpacity
										onPress={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<Hide
												height={large ? 25 : 18}
												width={large ? 28 : 18}
												color={theme.colors.greyScale.frenchGray}
											/>
										) : (
											<Show
												height={large ? 25 : 18}
												width={large ? 28 : 18}
												color={theme.colors.greyScale.frenchGray}
											/>
										)}
									</TouchableOpacity>
								</ContainerIcon>
							</ContainerInput>

							<ContainerBottom $large={large}>
								<TouchableOpacity>
									<ContainerButton $large={large}>
										<TextButton $large={large}>Criar conta</TextButton>
									</ContainerButton>
								</TouchableOpacity>

								<ContainerDivider>
									<Divider />

									<Label $large={large}>OU</Label>

									<Divider />
								</ContainerDivider>

								<ContainerAccount>
									<Account $large={large}>Já possui uma conta?</Account>
									<TouchableOpacity>
										<TextAccount $large={large}>Faça login aqui.</TextAccount>
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

export default SignIn
