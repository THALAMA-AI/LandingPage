import { useRef, useState } from 'react'
import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function DemoVideo() {
  const { tx } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function toggle() {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.muted = false
      v.play().catch(() => { v.muted = true; v.play() })
      setPlaying(true)
    }
  }

  return (
    <section id="demo" style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 2rem' }}>
      <FadeIn>
        <div className="section-label">{tx(t.demo.label)}</div>
      </FadeIn>
      <FadeIn delay={100}>
        <h2 className="section-title">{tx(t.demo.headline)}</h2>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="section-desc">{tx(t.demo.sub)}</p>
      </FadeIn>

      <FadeIn delay={300}>
        <div
          onClick={toggle}
          style={{
            position: 'relative', marginTop: '3.5rem',
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid #1E293B', background: '#000',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.08)',
            cursor: 'pointer',
          }}
        >
          <video
            ref={videoRef}
            src="/assets/intro-v1.mov"
            loop muted playsInline
            onEnded={() => setPlaying(false)}
            style={{ width: '100%', display: 'block' }}
          />
          {!playing && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.35)',
            }}>
              <div style={{
                width: 72, height: 72,
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s, background 0.2s',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  )
}
