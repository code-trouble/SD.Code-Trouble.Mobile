import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

interface IOnboardingState {
	isFirstOpen: boolean
	setFirstOpen: () => void
	checkFirstOpen: () => Promise<void>
}

export const useOnboardingStore = create<IOnboardingState>((set) => {
	const loadStorage = async () => {
		const storedValue = await AsyncStorage.getItem('@firstOpen')
		set({ isFirstOpen: storedValue !== 'true' })
	}

	loadStorage()

	return {
		isFirstOpen: true,
		setFirstOpen: async () => {
			await AsyncStorage.setItem('@firstOpen', 'true')
			set({ isFirstOpen: false })
		},
		checkFirstOpen: loadStorage,
	}
})
