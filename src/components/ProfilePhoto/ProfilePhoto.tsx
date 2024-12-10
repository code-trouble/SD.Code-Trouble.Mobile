import { Person } from '@icons/index'
import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
// biome-ignore lint/style/useImportType: <explanation>
import {
	ImageLibraryOptions,
	ImagePickerResponse,
	launchImageLibrary,
} from 'react-native-image-picker'
import { Container, ContainerImage, IconView, Image, Text } from './style'

export const ProfilePhoto = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [large, setLarge] = useState<boolean>(false)

	const openImagePicker = () => {
		const options: ImageLibraryOptions = {
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 100,
			maxWidth: 100,
		}

		launchImageLibrary(options, handleResponse)
	}

	const handleResponse = (response: ImagePickerResponse) => {
		if (response.didCancel) {
			console.log('User cancelled image picker')
		} else if (response.errorMessage) {
			console.log('Image picker error: ', response.errorMessage)
		} else if (response.assets && response.assets.length > 0) {
			const imageUri = response.assets[0]?.uri
			setSelectedImage(imageUri || null)
		}
	}

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<Container>
			<ContainerImage $large={large}>
				{selectedImage ? (
					<Image source={{ uri: selectedImage }} />
				) : (
					<Person
						color={theme.colors.greyScale.offWhite}
						width={large ? 75 : 45}
						height={large ? 75 : 45}
					/>
				)}
			</ContainerImage>

			<TouchableOpacity onPress={openImagePicker}>
				<IconView $large={large}>
					<Text $large={large}>+</Text>
				</IconView>
			</TouchableOpacity>
		</Container>
	)
}

export default ProfilePhoto