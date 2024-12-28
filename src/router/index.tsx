import { usePreviewStore } from '@store/firstOpenPreview'
import { useLoged } from '@store/userLoged'
import { useEffect } from 'react'
import AuthNavigation from './auth/authNavigation.router'
import Bottom from './bottomNavigator/bottomNavigator.router'
import PostRegisterRouter from './postRegister/postRegister.router'

export const Router: React.FC = () => {
	const isLoged = useLoged((state) => state.loged)

	const { isFirstOpenPreview, checkFirstOpen } = usePreviewStore()

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const initialize = async () => {
			await checkFirstOpen()
		}
		initialize()
	}, [])

	return isLoged ? (
		isFirstOpenPreview ? (
			<PostRegisterRouter />
		) : (
			<Bottom />
		)
	) : (
		<AuthNavigation />
	)
}

export default Router
