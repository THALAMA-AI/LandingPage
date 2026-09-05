import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const links = [
  { href: '#science',    key: 'science'    },
  { href: '#legal',      key: 'legal'      },
  { href: '#finance',    key: 'finance'    },
  { href: '#government', key: 'government' },
  { href: '#how',        key: 'how'        },
] as const

export function Header() {
  const { lang, setLang, tx } = useLang()

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#top" className="header__brand">
          <img src="/assets/logo.svg" alt="" className="header__logo" />
          <span className="header__name">THALAMA</span>
        </a>

        <nav className="header__nav">
          {links.map(l => (
            <a key={l.key} href={l.href}>{tx(t.nav[l.key])}</a>
          ))}
        </nav>

        <div className="header__right">
          <div className="lang" aria-label="Language">
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            <span className="lang__sep">/</span>
            <button onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button>
          </div>
          <a href="#evaluation" className="header__cta">{tx(t.nav.cta)}</a>
        </div>
      </div>
    </header>
  )
}
