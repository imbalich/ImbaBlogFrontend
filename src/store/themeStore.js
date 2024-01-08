import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    isDark: false,
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
    },
  },
  persist: {
    enabled: true,
    storage: localStorage,
    key: 'theme',
  },
})