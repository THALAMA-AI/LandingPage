import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function HowItWorks() {
  const { tx } = useLang()

  return (
    <section id="how" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem', textAlign: 'center' }}>
      <FadeIn>
        <div className="section-label">{tx(t.how.label)}</div>
      </FadeIn>
      <FadeIn delay={100}>
        <h2 className="section-title">{tx(t.how.headline)}</h2>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="section-desc" style={{ margin: '0 auto' }}>{tx(t.how.sub)}</p>
      </FadeIn>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5px', marginTop: '4.5rem',
        background: '#1E293B', borderRadius: 16, overflow: 'hidden',
      }}>
        {t.how.steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 100}>
            <div style={{
              background: '#111118', padding: '2.75rem 2.25rem',
              textAlign: 'left', height: '100%',
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '3.5rem', color: 'rgba(59,130,246,0.15)',
                lineHeight: 1, marginBottom: '1.25rem', fontWeight: 400,
              }}>
                {step.num}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.65rem' }}>
                {tx(step.title)}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.65 }}>
                {tx(step.desc)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
