import { Button, ContainerButton, TextButton } from './style'

interface IButton {
	text: string
	large: boolean
}

export const ComponentButton: React.FC<IButton> = ({ text, large }) => {
	return (
		<ContainerButton>
			<Button $large={large}>
				<TextButton $large={large}>{text}</TextButton>
			</Button>
		</ContainerButton>
	)
}

export default ComponentButton
