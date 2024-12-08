import { Button, ContainerButton, TextButton } from './style'

interface IButton {
	text: string
	large: boolean
	onPress?: () => void
}

export const ComponentButtonSkip: React.FC<IButton> = ({
	text,
	large,
	onPress,
}) => {
	return (
		<ContainerButton onPress={onPress}>
			<Button $large={large}>
				<TextButton $large={large}>{text}</TextButton>
			</Button>
		</ContainerButton>
	)
}

export default ComponentButtonSkip
