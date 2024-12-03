import type React from 'react'
import { useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import { Hide, Logo, Show } from '../../../assets/icons'
import {
	Account,
	Container,
	ContainerAccount,
	ContainerButton,
	ContainerDivider,
	ContainerForgot,
	ContainerForm,
	ContainerIcon,
	ContainerInput,
	ContainerLogo,
	Divider,
	ForgotPasswordText,
	Label,
	TextAccount,
	TextButton,
	TextInput,
	Title,
} from './style'

function SignIn(): React.JSX.Element {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
			>
				<Container>
					<ContainerLogo>
						<Logo width={149} />
					</ContainerLogo>

					<ContainerForm>
						<Title>Login</Title>

						<ContainerInput>
							<Label>Email</Label>

							<TextInput
								placeholder="Digite seu email"
								keyboardType="default"
							/>
						</ContainerInput>

						<ContainerInput>
							<Label>Senha</Label>

							<TextInput
								placeholder="Digite seu senha"
								secureTextEntry={showPassword}
							/>

							<ContainerIcon>
								<TouchableOpacity
									onPress={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <Hide height={23} /> : <Show height={23} />}
								</TouchableOpacity>
							</ContainerIcon>
						</ContainerInput>

						<ContainerForgot>
							<TouchableOpacity>
								<ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
							</TouchableOpacity>
						</ContainerForgot>

						<TouchableOpacity>
							<ContainerButton>
								<TextButton>Entrar</TextButton>
							</ContainerButton>
						</TouchableOpacity>

						<ContainerDivider>
							<Divider />

							<Label>OU</Label>

							<Divider />
						</ContainerDivider>

						<ContainerAccount>
							<Account>Ainda não possui conta?</Account>
							<TouchableOpacity>
								<TextAccount>Cadastrar</TextAccount>
							</TouchableOpacity>
						</ContainerAccount>
					</ContainerForm>
				</Container>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}

export default SignIn
