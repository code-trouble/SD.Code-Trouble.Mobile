import ComponentButton from '@components/Button/Button'
import ComponentContainer from '@components/Container/Container'
import ConmponentForm from '@components/ContainerForm/ContainerForm'
import ComponentContainerInput from '@components/Input/Input'
import ProfilePhoto from '@components/ProfilePhoto/ProfilePhoto'
import SelectPicker from '@components/SelectPicker/SelectPicker'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { ContainerBottom, Space } from './style'

export const PreviewProfile: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)
	const [valueInput, setValueInput] = useState<string>('')

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	const handleInput = (value: string) => {
		setValueInput(value)
	}

	const navigate = () => {
		console.log('')
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
						onInputChange={handleInput}
					/>
					<ComponentContainerInput
						valueLabel="Nome de Usuário"
						large={large}
						placeholder=""
						password={false}
						onInputChange={handleInput}
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
