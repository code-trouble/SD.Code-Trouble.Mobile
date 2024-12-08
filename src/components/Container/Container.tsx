import { Container } from './styles'

interface ILarge {
	large: boolean
	children?: React.ReactNode
}

export const ComponentContainer: React.FC<ILarge> = ({ large, children }) => {
	return <Container $large={large}>{children}</Container>
}

export default ComponentContainer
