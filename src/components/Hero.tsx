import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const stats = [
  { value: '0ms',  key: 'latency'     },
  { value: '10',   key: 'sessions'    },
  { value: '$0',   key: 'cost'        },
  { value: '100%', key: 'dataPrivacy' },
] as const

export function Hero() {
  const { tx } = useLang()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '8rem 2rem 5rem',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
      }} />

      {/* Badge */}
      <FadeIn delay={0}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(59,130,246,0.12)',
          border: '1px solid rgba(59,130,246,0.3)',
          color: '#3B82F6',
          fontSize: '0.76rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.4rem 1rem', borderRadius: '100px',
          marginBottom: '1.75rem',
        }}>
          <span style={{
            width: 6, height: 6, background: '#3B82F6', borderRadius: '50%',
            animation: 'pulse-dot 2s ease-in-out infinite',
            display: 'inline-block',
          }} />
          {tx(t.hero.badge)}
        </div>
      </FadeIn>

      {/* Headline */}
      <FadeIn delay={100}>
        <h1 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 400, lineHeight: 1.05,
          letterSpacing: '-0.025em', color: '#fff',
          maxWidth: '14ch', margin: '0 auto 1.5rem',
        }}>
          {tx(t.hero.headline)}
        </h1>
      </FadeIn>

      {/* Sub */}
      <FadeIn delay={200}>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#94A3B8', maxWidth: '52ch',
          margin: '0 auto 2.5rem', lineHeight: 1.65,
        }}>
          {tx(t.hero.sub)}
        </p>
      </FadeIn>

      {/* CTAs */}
      <FadeIn delay={300}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#cta" className="btn-primary">
            {tx(t.hero.cta1)}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#demo" className="btn-ghost">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
            </svg>
            {tx(t.hero.cta2)}
          </a>
        </div>
      </FadeIn>

      {/* Stats bar */}
      <FadeIn delay={400}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '3rem', marginTop: '4.5rem',
          paddingTop: '3rem', borderTop: '1px solid #1E293B',
          flexWrap: 'wrap',
        }}>
          {stats.map((s, i) => (
            <>
              <div key={s.key} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '2.4rem', color: '#fff', lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: '0.76rem', color: '#64748B',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  marginTop: '0.35rem', fontWeight: 500,
                }}>
                  {tx(t.hero.stats[s.key])}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div key={`div-${i}`} style={{ width: 1, height: 40, background: '#1E293B' }} className="stat-divider" />
              )}
            </>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
