import { Logo } from '@icons/index'
import breakpoints from '@utils/dimensons'
import { useEffect, useState } from 'react'
import { ContainerLogo } from './styles'

export const ComponentLogo: React.FC = () => {
	const [isLarge, setIsLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setIsLarge(true)
	}, [])

	return (
		<ContainerLogo $large={isLarge}>
			<Logo width={isLarge ? 149 : 96} />
		</ContainerLogo>
	)
}

export default ComponentLogo
