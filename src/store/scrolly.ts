import { create } from 'zustand'

interface IScrollY {
	scroll: number
	updateScroll: (value: number) => void
}

export const scrollYVertical = create<IScrollY>((set) => ({
	scroll: 0,
	updateScroll: (value) => set((state) => ({ scroll: value })),
}))
