import { Hide, Show } from '@icons/index'
import { theme } from '@theme/theme'
import type React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ContainerIcon, ContainerInput, Label, TextInput } from './style'

interface ITextInput {
	large: boolean
	valueLabel: string | React.ReactNode
	placeholder: string
	password: boolean
	onInputChange: (value: string) => void
	lastInput?: boolean
	value?: string
}

export const ComponentContainerInput: React.FC<ITextInput> = ({
	large,
	valueLabel,
	placeholder,
	password,
	onInputChange,
	lastInput,
	value,
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const [inputValue, setInputValue] = useState('')

	const handleChange = (value: string) => {
		setInputValue(value)
		onInputChange(value)
	}

	return (
		<ContainerInput $lastInput={lastInput}>
			{password ? (
				<>
					<Label $large={large}>{valueLabel}</Label>
					<ContainerIcon $large={large}>
						<TextInput
							placeholder={placeholder}
							secureTextEntry={!showPassword}
							$large={large}
							value={inputValue}
							onChangeText={handleChange}
						/>

						<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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
				</>
			) : (
				<>
					<Label $large={large}>{valueLabel}</Label>
					<ContainerIcon $large={large}>
						<TextInput
							placeholder={placeholder}
							$large={large}
							value={value}
							onChangeText={handleChange}
						/>
					</ContainerIcon>
				</>
			)}
		</ContainerInput>
	)
}

export default ComponentContainerInput
