import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

function CheckIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0,marginTop:1}}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18,flexShrink:0,marginTop:1}}>
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export function WhyDifferent() {
  const { tx } = useLang()

  return (
    <div id="why" style={{ background: '#111118', borderTop: '1px solid #1E293B', borderBottom: '1px solid #1E293B', padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div className="section-label">{tx(t.why.label)}</div>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="section-title">{tx(t.why.headline)}</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2px', marginTop: '3.5rem',
            borderRadius: 16, overflow: 'hidden', background: '#1E293B',
          }}>
            {/* Other tools column */}
            <div style={{ padding: '2.5rem', background: '#09090E' }}>
              <span style={{
                background: '#334155', color: '#94A3B8',
                fontSize: '0.73rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0.4rem 0.85rem', borderRadius: 6,
                display: 'inline-block', marginBottom: '1.75rem',
              }}>
                {tx(t.why.colOther)}
              </span>
              {t.why.other.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                  <XIcon />
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>{tx(item)}</span>
                </div>
              ))}
            </div>

            {/* Thalama column */}
            <div style={{ padding: '2.5rem', background: '#0D1829' }}>
              <span style={{
                background: 'rgba(59,130,246,0.12)', color: '#3B82F6',
                fontFamily: "'Pirulen', monospace",
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.4rem 0.85rem', borderRadius: 6,
                display: 'inline-block', marginBottom: '1.75rem',
              }}>
                {tx(t.why.colUs)}
              </span>
              {t.why.ours.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.1rem', alignItems: 'flex-start' }}>
                  <CheckIcon color="#3B82F6" />
                  <span style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>{tx(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
