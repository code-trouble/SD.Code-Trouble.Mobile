import { Bookmark, Heart, Share } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'
import { useState } from 'react'
import { Image, Share as ShareFunction, TouchableOpacity } from 'react-native'
import {
	Avatar,
	Body,
	Container,
	ContainerIcon,
	ContainerImage,
	ContainerTitle,
	DateDescription,
	Description,
	Footer,
	Header,
	Name,
	Text,
	Title,
} from './style'

export const ListBlog: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const [like, setLike] = useState<boolean>(false)

	const likeQuestion = () => {
		setLike(!like)
	}

	const share = () => {
		ShareFunction.share({
			message: 'Check out the Code Trouble app!  https://www.codetrouble.com',
			url: 'https://www.codetrouble.com',
			title: 'Code Trouble App',
		})
	}

	return (
		<Container>
			<Header>
				<ContainerImage>
					<Avatar source={require('../../assets/images/mascote.png')} />
				</ContainerImage>
				<Name>Lucas Correa</Name>
			</Header>

			<Body>
				<ContainerTitle isImage={large}>
					<Title $large={large}>Como faz Array no Javascript?</Title>
					<Description numberOfLines={2}>
						Breve descrição aqui, um subtítulo no máximo uns 100 (?) caractéres.
					</Description>
				</ContainerTitle>

				<Image
					source={require('../../assets/images/PhotoBlog.png')}
					style={{ width: 60, height: 60 }}
				/>
			</Body>

			<Footer>
				<ContainerIcon>
					<DateDescription>10 Out 2024</DateDescription>
					<TouchableOpacity onPress={likeQuestion}>
						<Heart
							color={
								like ? theme.colors.primary : theme.colors.greyScale.dimGray
							}
							width={large ? 25 : 20}
						/>
					</TouchableOpacity>

					<Text>12</Text>
				</ContainerIcon>

				<ContainerIcon>
					<TouchableOpacity>
						<Bookmark
							color={theme.colors.greyScale.dimGray}
							width={large ? 25 : 20}
						/>
					</TouchableOpacity>

					<TouchableOpacity onPress={share}>
						<Share
							color={theme.colors.greyScale.dimGray}
							width={large ? 25 : 20}
						/>
					</TouchableOpacity>
				</ContainerIcon>
			</Footer>
		</Container>
	)
}

export default ListBlog
