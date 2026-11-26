import { useSelector } from 'react-redux'

function Button({ hebrewText, englishText, onClick }) {
  const { language, theme, fontSize } = useSelector((state) => state.settings)
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="demo-button"
      onClick={onClick}
      style={{
        backgroundColor: isDark ? '#f5f5f5' : '#20242a',
        color: isDark ? '#20242a' : '#ffffff',
        fontSize: `${fontSize}px`,
      }}
    >
      {language === 'he' ? hebrewText : englishText}
    </button>
  )
}

export default Button
