import { create } from 'zustand'

interface IDisplay {
	display: boolean
	updateDisplay: (value: boolean) => void
}

export const displaySearch = create<IDisplay>((set) => ({
	display: false,
	updateDisplay: (value) => set((state) => ({ display: value })),
}))
