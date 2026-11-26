import { useSelector } from 'react-redux'

function Image({ src, hebrewAlt, englishAlt }) {
  const { language, theme } = useSelector((state) => state.settings)

  return (
    <img
      className="demo-image"
      src={src}
      alt={language === 'he' ? hebrewAlt : englishAlt}
      style={{
        borderColor: theme === 'dark' ? '#f5f5f5' : '#20242a',
      }}
    />
  )
}

export default Image
