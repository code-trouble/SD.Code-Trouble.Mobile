import { Close, Search } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { displaySearch } from '@store/displaySearch'
import { theme } from '@theme/theme'
import { Container, ContainerItem, Text, Title } from './style'

export const SearchRecents: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	const display = displaySearch((state) => state.display)

	return (
		<Container $display={display}>
			<Title $large={large}>Pesquisas Recentes</Title>
			<ContainerItem $large={large}>
				<Search
					color={theme.colors.greyScale.dimGray}
					width={large ? 20 : 10}
					height={large ? 20 : 10}
				/>
				<Text $large={large}>Figma</Text>
				<Close color={theme.colors.greyScale.dimGray} width={large ? 15 : 10} />
			</ContainerItem>
			<ContainerItem $large={large}>
				<Search
					color={theme.colors.greyScale.dimGray}
					width={large ? 20 : 10}
					height={large ? 20 : 10}
				/>
				<Text $large={large}>Figma</Text>
				<Close color={theme.colors.greyScale.dimGray} width={large ? 15 : 10} />
			</ContainerItem>
			<ContainerItem $large={large}>
				<Search
					color={theme.colors.greyScale.dimGray}
					width={large ? 20 : 10}
					height={large ? 20 : 10}
				/>
				<Text $large={large}>Figma</Text>
				<Close color={theme.colors.greyScale.dimGray} width={large ? 15 : 10} />
			</ContainerItem>
		</Container>
	)
}

export default SearchRecents
