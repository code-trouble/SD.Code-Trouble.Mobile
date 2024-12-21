import { create } from 'zustand'

interface ILoged {
	loged: boolean
	updateLoged: (value: boolean) => void
}

export const useLoged = create<ILoged>((set) => ({
	loged: false,
	updateLoged: (value) => set((state) => ({ loged: value })),
}))
