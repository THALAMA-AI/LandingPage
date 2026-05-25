import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '../i18n/translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  tx: (obj: Record<Lang, string>) => string
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('thalama-lang')
    return saved === 'es' ? 'es' : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('thalama-lang', l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [])

  const tx = (obj: Record<Lang, string>) => obj[lang]

  return <LangContext.Provider value={{ lang, setLang, tx }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
