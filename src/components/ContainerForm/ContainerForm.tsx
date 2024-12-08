import type React from 'react'
import { ContainerForm } from './style'

interface IChildren {
	children?: React.ReactNode
}

export const ConmponentForm: React.FC<IChildren> = ({ children }) => {
	return <ContainerForm>{children}</ContainerForm>
}

export default ConmponentForm
