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
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'

export const SignUp: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const large = useBreakpointGlobal((state) => state.break)

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
							<ComponentTitle large={large}>Cadastro</ComponentTitle>

							<ComponentContainerInput
								large={large}
								valueLabel="Nome Social"
								password={false}
								placeholder="Digite seu nome"
								onInputChange={handleInputChange}
							/>

							<ComponentContainerInput
								large={large}
								valueLabel="Email"
								password={false}
								placeholder="Digite seu email"
								onInputChange={handleInputChange}
							/>

							<ComponentContainerInput
								large={large}
								valueLabel="Senha"
								password={true}
								placeholder="******"
								onInputChange={handleInputChange}
							/>

							<ContainerBottom $large={large}>
								<ComponentButton large={large} text="Criar Conta" />

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
						</ConmponentForm>
					</ComponentContainer>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default SignUp
