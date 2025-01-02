import { Comments, Heart, Share } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'
import { useState } from 'react'
import {
	Body,
	Container,
	ContainerIcon,
	ContainerImage,
	ContainerText,
	DateDescription,
	Description,
	Footer,
	Header,
	Image,
	Name,
	Text,
	Title,
	TouchableOpacity,
} from './style'

export const ListQuestion: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [like, setLike] = useState<boolean>(false)

	const likeQuestion = () => {
		setLike(!like)
	}

	return (
		<Container>
			<Header>
				<ContainerImage>
					<Image source={require('../../assets/images/mascote.png')} />
				</ContainerImage>
				<ContainerText>
					<Name>Lucas Correa</Name>
					<DateDescription>10 Out 2024</DateDescription>
				</ContainerText>
			</Header>

			<Body>
				<Title $large={large}>
					Sphinx PDF build failing on readthedoc for Russian translation
				</Title>
				<Description numberOfLines={1}>
					PDF build of Sphinx’s own documentation are failing for Russian
					translation (example build). .readthedocs.yml is set to vuild HTML and
					then PDFm and its in the second step the failure arises lorem ipsum
					dolor sit amet lorem ipsum dolor adsasdasd
				</Description>
			</Body>

			<Footer>
				<ContainerIcon>
					<TouchableOpacity onPress={likeQuestion}>
						<Heart
							color={
								like ? theme.colors.primary : theme.colors.greyScale.dimGray
							}
							width={large ? 25 : 20}
						/>
					</TouchableOpacity>

					<Text>12</Text>

					<TouchableOpacity>
						<Comments
							color={theme.colors.greyScale.dimGray}
							width={large ? 25 : 20}
						/>
					</TouchableOpacity>

					<Text>12</Text>
				</ContainerIcon>

				<TouchableOpacity>
					<Share
						color={theme.colors.greyScale.dimGray}
						width={large ? 25 : 20}
					/>
				</TouchableOpacity>
			</Footer>
		</Container>
	)
}

export default ListQuestion
