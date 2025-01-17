import ComponentButton from '@components/Button/Button'
import ComponentButtonSkip from '@components/ButtonSkip/ButtonSkip'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import { Behance, Dribble, GitHub, Linkeding } from '@icons/index'
import { useNavigation } from '@react-navigation/native'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { usePreviewStore } from '@store/firstOpenPreview'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { ContainerBottom, ContainerGap, ContainerIcon, Text } from './style'

export const SocialMedia: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [inputValue, setInputValue] = useState<string>('')
	const { setFirstOpen } = usePreviewStore()

	const handleInput = (value: string) => {
		setInputValue(value)
	}

	const navigation = useNavigation()

	const navigate = () => {
		navigation.navigate('Preview do Perfil' as never)
	}

	const skip = () => {
		setFirstOpen()
	}

	if (!large) {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<ComponentContainer large={large}>
					<ContainerGap>
						<ConmponentForm>
							<ComponentContainerInput
								placeholder="@githubuser"
								valueLabel={
									<ContainerIcon>
										<GitHub width={large ? 42 : 26} height={large ? 42 : 26} />
										<Text $large={large}>Github</Text>
									</ContainerIcon>
								}
								large={large}
								password={false}
								onInputChange={handleInput}
							/>

							<ComponentContainerInput
								placeholder="https/linkedin.com"
								valueLabel={
									<ContainerIcon>
										<Linkeding
											width={large ? 42 : 26}
											height={large ? 42 : 26}
										/>
										<Text $large={large}>Linkedin</Text>
									</ContainerIcon>
								}
								large={large}
								password={false}
								onInputChange={handleInput}
							/>

							<ComponentContainerInput
								placeholder="@dribbleuser"
								valueLabel={
									<ContainerIcon>
										<Dribble width={large ? 42 : 26} height={large ? 42 : 26} />
										<Text $large={large}>Dribble</Text>
									</ContainerIcon>
								}
								large={large}
								password={false}
								onInputChange={handleInput}
							/>

							<ComponentContainerInput
								placeholder="@behanceuser"
								valueLabel={
									<ContainerIcon>
										<Behance width={large ? 42 : 26} height={large ? 42 : 26} />
										<Text $large={large}>Behance</Text>
									</ContainerIcon>
								}
								large={large}
								password={false}
								onInputChange={handleInput}
							/>
						</ConmponentForm>
					</ContainerGap>

					<ContainerBottom $large={large}>
						<ComponentButton large={large} text="Próximo" onPress={navigate} />
						<ComponentButtonSkip large={large} text="Pular" onPress={skip} />
					</ContainerBottom>
				</ComponentContainer>
			</ScrollView>
		)
	}

	return (
		<ComponentContainer large={large}>
			<ContainerGap>
				<ConmponentForm>
					<ComponentContainerInput
						placeholder="@githubuser"
						valueLabel={
							<ContainerIcon>
								<GitHub width={large ? 42 : 26} height={large ? 42 : 26} />
								<Text $large={large}>Github</Text>
							</ContainerIcon>
						}
						large={large}
						password={false}
						onInputChange={handleInput}
					/>

					<ComponentContainerInput
						placeholder="https/linkedin.com"
						valueLabel={
							<ContainerIcon>
								<Linkeding width={large ? 42 : 26} height={large ? 42 : 26} />
								<Text $large={large}>Linkedin</Text>
							</ContainerIcon>
						}
						large={large}
						password={false}
						onInputChange={handleInput}
					/>

					<ComponentContainerInput
						placeholder="@dribbleuser"
						valueLabel={
							<ContainerIcon>
								<Dribble width={large ? 42 : 26} height={large ? 42 : 26} />
								<Text $large={large}>Dribble</Text>
							</ContainerIcon>
						}
						large={large}
						password={false}
						onInputChange={handleInput}
					/>

					<ComponentContainerInput
						placeholder="@behanceuser"
						valueLabel={
							<ContainerIcon>
								<Behance width={large ? 42 : 26} height={large ? 42 : 26} />
								<Text $large={large}>Behance</Text>
							</ContainerIcon>
						}
						large={large}
						password={false}
						onInputChange={handleInput}
					/>
				</ConmponentForm>
			</ContainerGap>

			<ContainerBottom $large={large}>
				<ComponentButton large={large} text="Próximo" onPress={navigate} />
				<ComponentButtonSkip large={large} text="Pular" onPress={skip} />
			</ContainerBottom>
		</ComponentContainer>
	)
}

export default SocialMedia
