import { create } from 'zustand'

interface Ibreakpoint {
	break: boolean
	updateBreak: (value: boolean) => void
}

export const useBreakpointGlobal = create<Ibreakpoint>((set) => ({
	break: false,
	updateBreak: (value) => set((state) => ({ break: value })),
}))
