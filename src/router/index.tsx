import { useLoged } from '@store/userLoged'
import AuthNavigation from './auth/authNavigation.router'
import PostRegisterRouter from './postRegister/postRegister.router'

export const Router: React.FC = () => {
	const isLoged = useLoged((state) => state.loged)
	return isLoged ? <PostRegisterRouter /> : <AuthNavigation />
}

export default Router
