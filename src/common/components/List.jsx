import { useSelector } from 'react-redux'

function List({ hebrewItems, englishItems }) {
  const { language, theme, fontSize } = useSelector((state) => state.settings)
  const items = language === 'he' ? hebrewItems : englishItems

  return (
    <ul
      className="demo-list"
      style={{
        color: theme === 'dark' ? '#f5f5f5' : '#20242a',
        fontSize: `${fontSize}px`,
      }}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default List
