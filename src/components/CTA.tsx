import { useState, type FormEvent } from 'react'
import { FadeIn } from './FadeIn'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

type Status = 'idle' | 'sending' | 'success' | 'error'

export function CTA() {
  const { tx } = useLang()
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id:     PUBLIC_KEY,
          template_params: {
            from_email: email,
            to_email:   'diegolarrieta@gmail.com',
            message:    `Early access request from landing page: ${email}`,
          },
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" style={{ padding: '7rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 300, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 400, lineHeight: 1.1,
            letterSpacing: '-0.025em', marginBottom: '1.25rem',
          }}>
            {tx(t.cta.headline)}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            {tx(t.cta.sub)}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          {status === 'success' ? (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
              color: '#10B981', padding: '0.85rem 1.75rem', borderRadius: 10,
              fontSize: '0.95rem', fontWeight: 600,
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {tx(t.cta.success)}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email" required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={tx(t.cta.placeholder)}
                disabled={status === 'sending'}
                style={{
                  flex: 1, minWidth: 220,
                  padding: '0.85rem 1.25rem',
                  background: '#111118', border: '1px solid #1E293B',
                  borderRadius: 10, color: '#fff',
                  fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
                  outline: 'none',
                  opacity: status === 'sending' ? 0.6 : 1,
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                onBlur={e => (e.target.style.borderColor = '#1E293B')}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? '...' : tx(t.cta.btn)}
              </button>
            </form>
          )}
        </FadeIn>

        {status === 'error' && (
          <p style={{ fontSize: '0.82rem', color: '#F87171', marginTop: '0.75rem' }}>
            Something went wrong. Try again or email diegolarrieta@gmail.com directly.
          </p>
        )}

        <FadeIn delay={300}>
          <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '1rem' }}>
            {tx(t.cta.note)}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
