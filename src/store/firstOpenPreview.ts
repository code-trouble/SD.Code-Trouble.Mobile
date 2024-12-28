import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

interface IFirstOepn {
	isFirstOpenPreview: boolean
	setFirstOpen: () => void
	checkFirstOpen: () => Promise<void>
}

export const usePreviewStore = create<IFirstOepn>((set) => {
	const loadStorage = async () => {
		const storedValue = await AsyncStorage.getItem('@firstOpenPreview')
		set({ isFirstOpenPreview: storedValue !== 'true' })
	}

	loadStorage()

	return {
		isFirstOpenPreview: true,
		setFirstOpen: async () => {
			await AsyncStorage.setItem('@firstOpenPreview', 'true')
			set({ isFirstOpenPreview: false })
		},
		checkFirstOpen: loadStorage,
	}
})
