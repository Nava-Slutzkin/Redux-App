import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'he',
  theme: 'light',
  fontSize: 18,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'he' ? 'en' : 'he'
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setFontSize: (state, action) => {
      const size = Number(action.payload)
      if (Number.isFinite(size)) {
        state.fontSize = Math.min(30, Math.max(10, size))
      }
    },
    resetSettings: () => initialState,
  },
})

export const {
  toggleLanguage,
  toggleTheme,
  setFontSize,
  resetSettings,
} = settingsSlice.actions

export default settingsSlice.reducer
