import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const links = [
  { href: '#science',    key: 'science'    },
  { href: '#legal',      key: 'legal'      },
  { href: '#finance',    key: 'finance'    },
  { href: '#government', key: 'government' },
] as const

export function Footer() {
  const { tx } = useLang()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__brand">THALAMA</span>
        <nav className="footer__nav">
          {links.map(l => (
            <a key={l.key} href={l.href}>{tx(t.nav[l.key])}</a>
          ))}
        </nav>
        <span className="footer__tag">{tx(t.footer.tagline)}</span>
      </div>
    </footer>
  )
}
