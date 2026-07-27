import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/mockData'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = 'rtl'
  }, [lang])

  const toggleLang = () => setLang(l => (l === 'ar' ? 'he' : 'ar'))

  const name = (item) => lang === 'ar' ? item.name_ar : item.name_he
  const desc = (item) => lang === 'ar' ? item.description_ar : item.description_he
  const badge = (item) => lang === 'ar' ? item.badge_ar : item.badge_he
  const tag = (item) => lang === 'ar' ? item.tag_ar : item.tag_he

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, name, desc, badge, tag }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
