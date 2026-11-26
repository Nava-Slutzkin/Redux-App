import { useDispatch, useSelector } from 'react-redux'
import {
  resetSettings,
  setFontSize,
  toggleLanguage,
  toggleTheme,
} from './settingsSlice'

function Settings() {
  const dispatch = useDispatch()
  const { language, theme, fontSize } = useSelector(
    (state) => state.settings,
  )
  const isHebrew = language === 'he'

  return (
    <section className="settings-panel">
      <h2>{isHebrew ? 'הגדרות תצוגה' : 'Display Settings'}</h2>

      <div className="settings-row">
        <button type="button" onClick={() => dispatch(toggleLanguage())}>
          {isHebrew ? 'עברית' : 'English'}
        </button>
        <span>{isHebrew ? 'שפה' : 'Language'}: {isHebrew ? 'עברית' : 'English'}</span>
      </div>

      <div className="settings-row">
        <button type="button" onClick={() => dispatch(toggleTheme())}>
          {theme === 'light'
            ? (isHebrew ? 'מצב כהה' : 'Dark mode')
            : (isHebrew ? 'מצב בהיר' : 'Light mode')}
        </button>
        <span>{isHebrew ? 'ערכת נושא' : 'Theme'}: {theme}</span>
      </div>

      <div className="settings-row font-setting">
        <label htmlFor="font-size">
          {isHebrew ? 'גודל כתב' : 'Font size'}: {fontSize}px
        </label>
        <input
          id="font-size"
          type="range"
          min="10"
          max="30"
          value={fontSize}
          onChange={(event) => dispatch(setFontSize(event.target.value))}
        />
      </div>

      <button type="button" className="reset-button" onClick={() => dispatch(resetSettings())}>
        {isHebrew ? 'איפוס הגדרות' : 'Reset settings'}
      </button>
    </section>
  )
}

export default Settings
