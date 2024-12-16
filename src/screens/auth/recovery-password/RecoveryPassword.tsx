import type React from 'react'
import { useEffect, useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native'
import { ContainerBottom } from './styles'

import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ComponentLogo from '@components/Logo/Logo'
import ComponentTitle from '@components/Title/Title'
import { useBreakpointGlobal } from '@store/breakpointGlobal'

export const RecoveryPassword: React.FC = () => {
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
							<ComponentTitle large={large}>Recuperar Senha</ComponentTitle>

							<ComponentContainerInput
								large={large}
								password={false}
								placeholder="Digite seu email"
								valueLabel="Email"
								onInputChange={handleInputChange}
							/>

							<ComponentContainerInput
								large={large}
								password={true}
								placeholder="Digite sua senha"
								valueLabel="Nova senha"
								onInputChange={handleInputChange}
							/>

							<ComponentContainerInput
								large={large}
								password={true}
								placeholder="********"
								valueLabel="Confirme sua senha"
								onInputChange={handleInputChange}
							/>

							<ContainerBottom $large={large}>
								<ComponentButton large={large} text="Confirmar" />
							</ContainerBottom>
						</ConmponentForm>
					</ComponentContainer>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default RecoveryPassword
