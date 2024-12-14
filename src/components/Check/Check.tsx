import { Close } from '@icons/index'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, ContainerCheck, Text } from './styles'

interface ICheck {
	text: string
}

export const Check: React.FC<ICheck> = ({ text }) => {
	const [large, setLarge] = useState<boolean>(false)
	const [select, setSelect] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])
	return (
		<TouchableOpacity onPress={() => setSelect(!select)}>
			<Container $select={select} $large={large}>
				<ContainerCheck $large={large}>
					<Text $large={large}>{text}</Text>
					{select ? <Close width={10} color="#fff" /> : ''}
				</ContainerCheck>
			</Container>
		</TouchableOpacity>
	)
}

export default Check
