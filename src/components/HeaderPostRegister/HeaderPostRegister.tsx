import ComponentLogo from '@components/Logo/Logo'
import { LeftArrow } from '@icons/index'
import { useNavigation } from '@react-navigation/native'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
	Container,
	ContanerProgress,
	Horzintal,
	ProgressBackground,
	ProgressBar,
	Title,
} from './style'

interface IHeaderPostRegister {
	title: string
	back: boolean
	percentage: number
}

export const HeaderPostRegister: React.FC<IHeaderPostRegister> = ({
	back,
	title,
	percentage,
}) => {
	const [large, setLarge] = useState<boolean>(false)
	const navigation = useNavigation()

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<Container>
			<ComponentLogo />

			<ContanerProgress>
				<ProgressBackground />
				<ProgressBar $percentage={percentage} />
			</ContanerProgress>

			<Horzintal>
				{back ? (
					<>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<LeftArrow />
						</TouchableOpacity>
						<Title $large={large}>{title}</Title>
					</>
				) : (
					<Title $large={large}>{title}</Title>
				)}
			</Horzintal>
		</Container>
	)
}

export default HeaderPostRegister
