import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import heroImg from './assets/hero.png'
import Settings from './features/settings/Settings'
import Button from './common/components/Button'
import Image from './common/components/Image'
import List from './common/components/List'
import { toggleLanguage } from './features/settings/settingsSlice'

function App() {
  const dispatch = useDispatch()
  const { language, theme, fontSize } = useSelector((state) => state.settings)
  const isHebrew = language === 'he'

  return (
    <main
      className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
      dir={isHebrew ? 'rtl' : 'ltr'}
      style={{ fontSize: `${fontSize}px` }}
    >
      <header className="app-header">
        <h1>{isHebrew ? 'הגדרות אתר' : 'Website Settings'}</h1>
        <p>
          {isHebrew
            ? 'שנו את השפה, ערכת הנושא וגודל הכתב.'
            : 'Change the language, theme, and font size.'}
        </p>
      </header>

      <div className="app-layout">
        <Settings />

        <section className="preview-panel">
          <h2>{isHebrew ? 'תצוגה מקדימה' : 'Preview'}</h2>
          <Button
            hebrewText="החלפת שפה"
            englishText="Switch language"
            onClick={() => dispatch(toggleLanguage())}
          />
          <Image
            src={heroImg}
            hebrewAlt="איור React"
            englishAlt="React illustration"
          />
          <List
            hebrewItems={[
              'רידקס מנהל את ההגדרות',
              'הקומפוננטות משתמשות באותו סטור',
              'העיצוב מתעדכן בזמן אמת',
            ]}
            englishItems={[
              'Redux manages the settings',
              'Components use the same store',
              'The design updates in real time',
            ]}
          />
        </section>
      </div>
    </main>
  )
}

export default App
