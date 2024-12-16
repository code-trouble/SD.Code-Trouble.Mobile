import { Close } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, ContainerCheck, Text } from './styles'

interface ICheck {
	text: string
}

export const Check: React.FC<ICheck> = ({ text }) => {
	const large = useBreakpointGlobal((state) => state.break)
	const [select, setSelect] = useState<boolean>(false)

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
