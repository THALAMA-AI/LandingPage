import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'
import { useScrolled } from '../hooks/useScrolled'

export function Navbar() {
  const { lang, setLang, tx } = useLang()
  const scrolled = useScrolled()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.25rem 2.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(9,9,14,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #1E293B' : '1px solid transparent',
      transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
        <img src="/assets/logo.svg" alt="THALAMA AI" style={{ width: 30, height: 30 }} />
        <span style={{
          fontFamily: "'Pirulen', monospace",
          fontSize: '0.9rem',
          color: '#fff',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          THALAMA AI
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Language toggle */}
        <div style={{
          display: 'flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid #1E293B',
          borderRadius: '100px', overflow: 'hidden',
        }}>
          {(['en', 'es'] as const).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: '0.4rem 0.85rem',
                background: lang === l ? '#3B82F6' : 'transparent',
                color: lang === l ? '#fff' : '#94A3B8',
                border: 'none', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <a
          href="#cta"
          style={{
            padding: '0.55rem 1.25rem',
            background: '#3B82F6', color: '#fff',
            border: 'none', borderRadius: '8px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem', fontWeight: 600,
            cursor: 'pointer', textDecoration: 'none',
            display: 'inline-block',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.background = '#2563EB')}
          onMouseLeave={e => ((e.target as HTMLElement).style.background = '#3B82F6')}
        >
          {tx(t.nav.cta)}
        </a>
      </div>
    </nav>
  )
}
