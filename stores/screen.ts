import { create } from 'zustand'

export type Screen = 'home' | 'profile' | 'settings' | 'event'

interface ScreenState {
  current: Screen
  setScreen: (screen: Screen) => void
}

export const useScreen = create<ScreenState>()((set) => ({
  current: 'home',
  setScreen: (screen) => set({ current: screen }),
}))
