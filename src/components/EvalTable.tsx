import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const TICK_MS = 620
const PAUSE_TICKS = 5

export function EvalTable() {
  const { tx } = useLang()
  const rows = t.eval.rows
  const total = rows.length
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStep(s => (s + 1) % (total + PAUSE_TICKS))
    }, TICK_MS)
    return () => clearInterval(id)
  }, [total])

  const done = step >= total
  const shownCount = Math.min(step, total)

  return (
    <div className="eval" aria-live="polite">
      <div className="eval__status">
        <div className="eval__status-left">
          <span className="eval__dot" />
          <span className="eval__status-text">{done ? tx(t.eval.done) : tx(t.eval.running)}</span>
        </div>
        <span className="eval__count">{shownCount} / {total} {tx(t.eval.models)}</span>
      </div>

      <div className="eval__row eval__row--head">
        <span>{tx(t.eval.colModel)}</span>
        <span className="eval__hide-sm">{tx(t.eval.colLicense)}</span>
        <span className="eval__hide-sm">{tx(t.eval.colGpqa)}</span>
        <span className="eval__hide-sm">{tx(t.eval.colSwe)}</span>
        <span>{tx(t.eval.colYours)}</span>
      </div>

      {rows.map((r, i) => {
        const kind = 'kind' in r ? r.kind : 'open'
        const shown = i < step
        const active = i === step - 1
        const tuned = kind === 'tuned'
        const closed = kind === 'closed'
        const color = tuned ? 'var(--accent)' : closed ? '#4a5a61' : 'var(--accent-soft)'
        const bg = active ? 'var(--panel-2)' : tuned && shown ? 'rgba(60,130,140,0.14)' : 'transparent'
        const tag = tuned ? tx(t.eval.tagYours) : closed ? tx(t.eval.tagRented) : tx(t.eval.tagOpen)

        return (
          <div key={i} className="eval__row" style={{ background: bg }}>
            <div className="eval__model">
              <span className="eval__name" style={{ color: tuned && shown ? 'var(--accent)' : undefined }}>
                {tx(r.name)}
              </span>
              <span className="eval__org">{tx(r.org)}</span>
            </div>
            <span className="eval__cell eval__cell--sm eval__hide-sm">{tx(r.license)}</span>
            <span className="eval__cell eval__hide-sm">{shown ? r.gpqa : ''}</span>
            <span className="eval__cell eval__hide-sm">{shown ? r.swe : ''}</span>
            <div className="eval__score">
              <div className="eval__track">
                <div className="eval__bar" style={{ width: shown ? `${r.score}%` : '0%', background: color }} />
              </div>
              <span className="eval__label">{shown ? r.score : '··'}</span>
              <span className="eval__tag">{tag}</span>
            </div>
          </div>
        )
      })}

      <p className="eval__foot">{tx(t.eval.foot)}</p>
    </div>
  )
}
