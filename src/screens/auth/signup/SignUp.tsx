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
} from './style.ts'

export const SignUp: React.FC = () => {
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
						<Title>Cadastro</Title>

						<ContainerInput>
							<Label>Nome Social</Label>

							<TextInput placeholder="Digite seu nome" keyboardType="default" />
						</ContainerInput>

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
								placeholder="Digite sua senha"
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

						<TouchableOpacity>
							<ContainerButton>
								<TextButton>Criar conta</TextButton>
							</ContainerButton>
						</TouchableOpacity>

						<ContainerDivider>
							<Divider />

							<Label>OU</Label>

							<Divider />
						</ContainerDivider>

						<ContainerAccount>
							<Account>Já possui conta?</Account>
							<TouchableOpacity>
								<TextAccount>Entrar</TextAccount>
							</TouchableOpacity>
						</ContainerAccount>
					</ContainerForm>
				</Container>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	)
}

export default SignUp
