import FabButton from '@components/FabButton/FabButton'
import ListQuestion from '@components/ListQuestion/ListQuestion'
import SearchRecents from '@components/SearchRecents/SearchRecents'
import { displaySearch } from '@store/displaySearch'
import { Container, ScrollView } from './style'

export const Posts: React.FC = () => {
	const display = displaySearch((state) => state.display)
	return (
		<Container>
			<SearchRecents />

			<ScrollView $display={display}>
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
				<ListQuestion />
			</ScrollView>
			<FabButton />
		</Container>
	)
}

export default Posts
