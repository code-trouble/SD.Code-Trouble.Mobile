import FabButton from '@components/FabButton/FabButton'
import ListTags from '@components/ListTags/ListTags'
import SearchRecents from '@components/SearchRecents/SearchRecents'
import { displaySearch } from '@store/displaySearch'
import { Container, ScrollView } from './style'

export const Tags: React.FC = () => {
	const display = displaySearch((state) => state.display)
	return (
		<Container>
			<SearchRecents />

			<ScrollView $display={display}>
				<ListTags text="figma" />
				<ListTags text="JavaScript" />
				<ListTags text="Front End" />
				<ListTags text="Python" />
				<ListTags text="Designer" />
				<ListTags text="React" />
				<ListTags text="React Native" />
				<ListTags text="Java" />
				<ListTags text="Jquery" />
				<ListTags text="Jquery" />
			</ScrollView>
			<FabButton />
		</Container>
	)
}

export default Tags
