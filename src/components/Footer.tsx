import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Footer() {
  const { tx } = useLang()

  return (
    <footer style={{
      borderTop: '1px solid #1E293B',
      padding: '2.25rem 2.5rem',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <img src="/assets/logo.svg" alt="THALAMA AI" style={{ width: 22, height: 22 }} />
        <span style={{
          fontFamily: "'Pirulen', monospace",
          fontSize: '0.72rem', color: '#64748B',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          THALAMA AI
        </span>
      </a>
      <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
        {tx(t.footer.copy)}
      </span>
    </footer>
  )
}
