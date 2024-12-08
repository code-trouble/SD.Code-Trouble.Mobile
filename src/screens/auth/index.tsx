import type React from 'react'
import ForgotPassword from './forgot-password/ForgotPassword'
import RecoveryPassword from './recovery-password/RecoveryPassword'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'

export enum AuthType {
	SignIn = 'signin',
	SignUp = 'signup',
	RecoveryPassword = 'recovery-password',
	ForgotPassword = 'forgot-password',
}

interface IAuth {
	type: AuthType // Use o enum para o tipo
}

interface IAuth {
	type: AuthType
}

export const Auth: React.FC<IAuth> = ({ type }) => {
	let component: React.ReactNode = null

	switch (type) {
		case 'signin':
			component = <SignIn />
			break
		case 'signup':
			component = <SignUp />
			break
		case 'recovery-password':
			component = <RecoveryPassword />
			break
		case 'forgot-password':
			component = <ForgotPassword />
			break
		default:
			component = '<View><Text>Tipo não suportado<Text/></View>'
			break
	}

	return <>{component}</>
}

export default Auth
