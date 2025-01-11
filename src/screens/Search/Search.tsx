import FabButton from '@components/FabButton/FabButton'
import ListBlog from '@components/ListBlog/ListBlog'
import SearchRecents from '@components/SearchRecents/SearchRecents'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { ScrollView } from 'react-native'
import { Container, Text } from './style'

export const SearchPage: React.FC = () => {
	const large = useBreakpointGlobal((state) => state.break)
	return (
		<Container>
			<SearchRecents />

			<ScrollView>
				<Text $large={large}>Em Alta</Text>
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
				<ListBlog />
			</ScrollView>
			<FabButton />
		</Container>
	)
}

export default SearchPage
