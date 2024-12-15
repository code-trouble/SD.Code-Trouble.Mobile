import { Bell, Logo } from '@icons/index'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container } from './style'

export const Header: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 640) setLarge(true)
	}, [])

	return (
		<Container $large={large}>
			<Logo width={large ? 149 : 96} />
			<TouchableOpacity>
				<Bell width={large ? 26 : 18} />
			</TouchableOpacity>
		</Container>
	)
}

export default Header
