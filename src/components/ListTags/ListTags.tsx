import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
	Container,
	ContainerText,
	ContainerTextTouchable,
	Text,
	TextTouchable,
} from './style'

interface IListTags {
	text: string
}

export const ListTags: React.FC<IListTags> = ({ text }) => {
	const large = useBreakpointGlobal((state) => state.break)
	const [follow, setFollow] = useState<boolean>(false)

	return (
		<Container>
			<ContainerText $large={large}>
				<Text $large={large}>{text}</Text>
			</ContainerText>

			<TouchableOpacity onPress={() => setFollow(!follow)}>
				<ContainerTextTouchable $active={follow} $large={large}>
					<TextTouchable $active={follow}>
						{follow ? 'Seguindo' : 'Seguir'}
					</TextTouchable>
				</ContainerTextTouchable>
			</TouchableOpacity>
		</Container>
	)
}

export default ListTags
