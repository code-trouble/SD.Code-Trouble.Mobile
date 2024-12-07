import { Title } from './style'

interface ILarge {
	large: boolean
	children?: React.ReactNode
}

export const ComponentTitle: React.FC<ILarge> = ({ large, children }) => {
	return <Title $large={large}>{children}</Title>
}

export default ComponentTitle
