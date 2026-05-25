import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

interface Props {
  onDone: () => void
}

export function IntroSequence({ onDone }: Props) {
  const { tx, lang } = useLang()
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const [phase, setPhase] = useState<1 | 2>(1)
  const [headlineVisible, setHeadlineVisible] = useState(false)
  const [subVisible, setSubVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  const headline = phase === 1 ? tx(t.intro.v1) : tx(t.intro.v2)

  function exit() {
    setExiting(true)
    setTimeout(onDone, 1000)
  }

  function animateProgress(durationMs: number) {
    const bar = progressRef.current
    if (!bar) return
    bar.style.transition = 'none'
    bar.style.width = '0%'
    requestAnimationFrame(() => {
      bar.style.transition = `width ${durationMs}ms linear`
      bar.style.width = '100%'
    })
  }

  function showText() {
    setHeadlineVisible(false)
    setSubVisible(false)
    setTimeout(() => setHeadlineVisible(true), 100)
    setTimeout(() => setSubVisible(true), 400)
  }

  function startPhase2() {
    setPhase(2)
    showText()
    const v2 = video2Ref.current
    if (!v2) return exit()
    v2.play().catch(exit)
    const dur = v2.duration && !isNaN(v2.duration) ? v2.duration * 1000 : 5500
    animateProgress(dur)
    v2.addEventListener('ended', exit, { once: true })
    setTimeout(exit, Math.min(dur + 300, 9000))
  }

  useEffect(() => {
    const v1 = video1Ref.current
    if (!v1) return

    const begin = () => {
      showText()
      v1.play().catch(exit)
      const dur = v1.duration && !isNaN(v1.duration) ? v1.duration * 1000 : 6000
      animateProgress(dur)
      v1.addEventListener('ended', startPhase2, { once: true })
      setTimeout(startPhase2, Math.min(dur + 300, 10000))
    }

    if (v1.readyState >= 1) begin()
    else v1.addEventListener('loadedmetadata', begin, { once: true })
    setTimeout(begin, 600)
  }, [])

  // Re-animate text when lang changes
  useEffect(() => { showText() }, [lang])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        animation: exiting ? 'intro-fade-out 1s ease forwards' : 'none',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Videos */}
      <video
        ref={video1Ref}
        src="/assets/intro-v1.mov"
        muted playsInline preload="auto"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: phase === 1 ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />
      <video
        ref={video2Ref}
        src="/assets/intro-v2.mov"
        muted playsInline preload="auto"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: phase === 2 ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 2rem', userSelect: 'none' }}>
        <div style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 400,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '16ch',
          margin: '0 auto',
          opacity: headlineVisible ? 1 : 0,
          transform: headlineVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}>
          {headline}
        </div>
        <div style={{
          fontFamily: "'Pirulen', monospace",
          fontSize: 'clamp(0.6rem, 1.1vw, 0.8rem)',
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '1.5rem',
          opacity: subVisible ? 1 : 0,
          transform: subVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}>
          {tx(t.intro.sub)}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, height: '2px',
        width: '0%', background: '#3B82F6', zIndex: 4,
      }} ref={progressRef} />

      {/* Skip */}
      <button
        onClick={exit}
        style={{
          position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 4,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.78rem', fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '0.55rem 1.15rem', borderRadius: '100px',
          cursor: 'pointer', backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = '#fff' }}
        onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)' }}
      >
        {tx(t.intro.skip)}
      </button>
    </div>
  )
}
