import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ProfilePhoto from '@components/ProfilePhoto/ProfilePhoto'
import SelectPicker from '@components/SelectPicker/SelectPicker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { useConfUserPreview } from '@store/confUserPreview'
import { usePreviewStore } from '@store/firstOpenPreview'
import { useEffect, useState } from 'react'
import { ContainerBottom, Space } from './style'

export const PreviewProfile: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const { user: userConf, updateUser } = useConfUserPreview()
	const [user, setUser] = useState<object>({})
	const { setFirstOpen } = usePreviewStore()

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const verifyUser = async () => {
			const user = await AsyncStorage.getItem(`user_${userConf.email}`)
			setUser(JSON.parse(user))
		}
		verifyUser()
	}, [])

	const handleInput = (value: string) => {
		updateUser({ ...userConf, name: value })
	}

	const handleInputSocialName = (value: string) => {
		console.log(value)
	}

	const navigate = () => {
		setFirstOpen()
	}

	return (
		<ComponentContainer large={large}>
			<ProfilePhoto />

			<ConmponentForm>
				<Space>
					<ComponentContainerInput
						valueLabel="Nome Social"
						large={large}
						placeholder=""
						password={false}
						onInputChange={handleInputSocialName}
						value={user?.nameValue || ''}
					/>
					<ComponentContainerInput
						valueLabel="Nome de Usuário"
						large={large}
						placeholder=""
						password={false}
						onInputChange={handleInput}
						value={userConf.name}
					/>
					<SelectPicker mt={0} />
				</Space>
			</ConmponentForm>

			<ContainerBottom $large={large}>
				<ComponentButton large={large} text="Próximo" onPress={navigate} />
			</ContainerBottom>
		</ComponentContainer>
	)
}

export default PreviewProfile
