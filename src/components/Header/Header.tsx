import { Bell, Logo } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Description, Hstack } from './style'

interface IHeader {
	component?: React.ReactNode
	bottom: boolean
}

export const Header: React.FC<IHeader> = ({ component, bottom }) => {
	const large = useBreakpointGlobal((state) => state.break)

	return (
		<Container $large={large}>
			<Hstack>
				<Logo width={large ? 149 : 96} />
				<TouchableOpacity>
					<Bell width={large ? 26 : 18} />
				</TouchableOpacity>
			</Hstack>

			{bottom ? <Description $large={large}>{component}</Description> : ''}
		</Container>
	)
}

export default Header
