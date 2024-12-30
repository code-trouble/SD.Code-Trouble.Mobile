import { create } from 'zustand'

type confUser = {
	email: string
	name: string
	interests: string[]
	pronouns: string
	photo: string | undefined
}

interface IConfUserPreview {
	user: confUser
	updateUser: (value: confUser) => void
}

export const useConfUserPreview = create<IConfUserPreview>((set) => ({
	user: {
		email: '',
		name: '',
		interests: [],
		pronouns: '',
		photo: '',
	},
	updateUser: (value) => set((state) => ({ user: value })),
}))
