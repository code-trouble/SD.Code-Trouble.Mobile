import FabButton from '@components/FabButton/FabButton'
import ListPersons from '@components/ListPersons/ListPersons'
import SearchRecents from '@components/SearchRecents/SearchRecents'
import { displaySearch } from '@store/displaySearch'
import { Container, ScrollView } from './style'

export const Person: React.FC = () => {
	const display = displaySearch((state) => state.display)

	return (
		<Container>
			<SearchRecents />
			<ScrollView $display={display}>
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
				<ListPersons />
			</ScrollView>
			<FabButton />
		</Container>
	)
}

export default Person
