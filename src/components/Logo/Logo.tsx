import { Logo } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { ContainerLogo } from './styles'

export const ComponentLogo: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)

	return (
		<ContainerLogo $large={large}>
			<Logo width={large ? 149 : 96} />
		</ContainerLogo>
	)
}

export default ComponentLogo
