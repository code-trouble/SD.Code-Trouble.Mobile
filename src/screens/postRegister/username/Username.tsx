import ComponentContainer from '@components/Container/Container'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'

export const Username: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return <ComponentContainer large={large}></ComponentContainer>
}

export default Username
