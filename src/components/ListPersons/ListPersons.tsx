import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
	Container,
	ContainerImage,
	ContainerText,
	ContainerTextTouchable,
	Image,
	Name,
	Text,
	UserName,
} from './style'

export const ListPersons: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [follow, setFollow] = useState<boolean>(false)

	return (
		<Container>
			<ContainerImage>
				<Image source={require('../../assets/images/mascote.png')} />

				<ContainerText>
					<Name $large={large}>Lucas Correa</Name>
					<UserName $large={large}>@lucas_correa</UserName>
				</ContainerText>
			</ContainerImage>

			<TouchableOpacity onPress={() => setFollow(!follow)}>
				<ContainerTextTouchable $active={follow} $large={large}>
					<Text $active={follow}>{follow ? 'Seguindo' : 'Seguir'}</Text>
				</ContainerTextTouchable>
			</TouchableOpacity>
		</Container>
	)
}

export default ListPersons
