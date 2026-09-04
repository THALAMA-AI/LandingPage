import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function FAQ() {
  const { tx } = useLang()
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="band band--top">
      <div className="wrap section grid-faq">
        <div className="stack" style={{ gap: 14 }}>
          <span className="eyebrow">{tx(t.faq.label)}</span>
          <h2 className="h2 h2--md">{tx(t.faq.headline)}</h2>
        </div>

        <div className="stack">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="faq__item">
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq__text">{tx(item.q)}</span>
                  <span className="faq__sign" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq__a">{tx(item.a)}</p>}
              </div>
            )
          })}
          <div className="faq__end" />
        </div>
      </div>
    </section>
  )
}
