import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const propIcons = [
  // lightning
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  // lock
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  // dollar
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  // sun / model
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
]

export function Hardware() {
  const { tx } = useLang()

  return (
    <div id="hardware" style={{ padding: '7rem 2rem' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '6rem', alignItems: 'center',
      }}>
        {/* Image */}
        <FadeIn>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -2,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.3), transparent 55%)',
              borderRadius: 20, zIndex: 0,
            }} />
            <img
              src="/assets/jetson-hardware.png"
              alt="NVIDIA Jetson Orin Nano"
              style={{
                width: '100%', borderRadius: 18,
                display: 'block', position: 'relative', zIndex: 1,
                filter: 'brightness(0.92) contrast(1.05)',
              }}
            />
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2,
              background: 'rgba(9,9,14,0.88)', backdropFilter: 'blur(12px)',
              border: '1px solid #1E293B', borderRadius: 10,
              padding: '0.75rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.65rem',
            }}>
              <div style={{
                width: 8, height: 8, background: '#10B981', borderRadius: '50%', flexShrink: 0,
                boxShadow: '0 0 8px rgba(16,185,129,0.6)',
              }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>NVIDIA Jetson Orin Nano</div>
                <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{tx(t.hardware.badgeSub)}</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={150}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
              color: '#10B981', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.35rem 0.85rem', borderRadius: '100px', marginBottom: '1.25rem',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              {tx(t.hardware.chip)}
            </div>

            <h2 className="section-title">{tx(t.hardware.headline)}</h2>
            <p className="section-desc">{tx(t.hardware.sub)}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2.25rem' }}>
              {t.hardware.props.map((prop, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 36, height: 36, flexShrink: 0,
                    background: 'rgba(59,130,246,0.12)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#3B82F6', marginTop: 1,
                  }}>
                    {propIcons[i]}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                      {tx(prop.title)}
                    </div>
                    <p style={{ fontSize: '0.87rem', color: '#94A3B8', lineHeight: 1.6 }}>
                      {tx(prop.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
