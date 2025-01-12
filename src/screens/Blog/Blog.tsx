import FabButton from '@components/FabButton/FabButton'
import ListBlog from '@components/ListBlog/ListBlog'
import { Container, ScrollView } from './style'

export const Blog: React.FC = () => {
	return (
		<Container>
			<ScrollView>
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

export default Blog
