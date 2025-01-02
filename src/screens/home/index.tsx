import FabButton from '@components/FabButton/FabButton'
import ListQuestion from '@components/ListQuestion/ListQuestion'
import type React from 'react'
import { ScrollView } from 'react-native'
import { Container } from './style'

function Home(): React.JSX.Element {
	return (
		<Container>
			<ScrollView>
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

export default Home
