import { useState, type FormEvent } from 'react'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string
const TO_EMAIL    = 'diegolarrieta@gmail.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Evaluation() {
  const { tx } = useLang()
  const [status, setStatus]     = useState<Status>('idle')
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [org, setOrg]           = useState('')
  const [vertical, setVertical] = useState('science')
  const [workflows, setWorkflows] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    const message = [
      'Evaluation request from landing page',
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org}`,
      `Vertical: ${vertical}`,
      `Workflows: ${workflows}`,
    ].join('\n')

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
            to_email:   TO_EMAIL,
            name, org, vertical, workflows,
            message,
          },
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) {
        setName(''); setEmail(''); setOrg(''); setWorkflows('')
      }
    } catch {
      setStatus('error')
    }
  }

  const note =
    status === 'success' ? tx(t.evaluation.noteSuccess)
    : status === 'error' ? tx(t.evaluation.noteError)
    : tx(t.evaluation.noteIdle)

  const sending = status === 'sending'

  return (
    <section id="evaluation" className="band band--light">
      <div className="wrap section grid-2 grid-2--wide">
        <div className="stack" style={{ gap: 20 }}>
          <span className="eyebrow eyebrow--dim">{tx(t.evaluation.label)}</span>
          <h2 className="h2 h2--lg">{tx(t.evaluation.headline)}</h2>
          <p className="body" style={{ fontSize: 17, maxWidth: 460 }}>{tx(t.evaluation.sub)}</p>
        </div>

        <form onSubmit={handleSubmit} className="eval-form">
          <label className="field">
            <span className="field__label">{tx(t.evaluation.name)}</span>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} disabled={sending} />
          </label>
          <label className="field">
            <span className="field__label">{tx(t.evaluation.email)}</span>
            <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} disabled={sending} />
          </label>
          <label className="field">
            <span className="field__label">{tx(t.evaluation.org)}</span>
            <input type="text" name="org" value={org} onChange={e => setOrg(e.target.value)} disabled={sending} />
          </label>
          <label className="field">
            <span className="field__label">{tx(t.evaluation.vertical)}</span>
            <select name="vertical" value={vertical} onChange={e => setVertical(e.target.value)} disabled={sending}>
              {t.evaluation.verticals.map(v => (
                <option key={v.value} value={v.value}>{tx(v.label)}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field__label">{tx(t.evaluation.workflows)}</span>
            <textarea name="workflows" rows={4} value={workflows} onChange={e => setWorkflows(e.target.value)} disabled={sending} />
          </label>
          <div className="eval-form__actions">
            <button type="submit" className="btn btn--ink" disabled={sending}>
              {sending ? tx(t.evaluation.sending) : tx(t.evaluation.submit)}
            </button>
            <span className={`eval-form__note${status === 'error' ? ' eval-form__note--error' : ''}`}>{note}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
