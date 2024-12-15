import type React from 'react'
import { Clock, Person } from '../../assets/icons'
import { Container, Title } from './style'

function Home(): React.JSX.Element {
	return (
		<Container>
			<Title>Code Trouble</Title>
			<Clock width={25} height={25} />
		</Container>
	)
}

export default Home
