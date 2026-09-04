import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Proof() {
  const { tx } = useLang()

  return (
    <section className="wrap section grid-2">
      <div className="stack" style={{ gap: 24 }}>
        <span className="eyebrow">{tx(t.proof.label)}</span>
        <h2 className="h2 h2--md">{tx(t.proof.headline)}</h2>
        <div className="proof__list">
          {t.proof.items.map((item, i) => (
            <div key={i} className="proof__item">
              <h3 className="h3">{tx(item.title)}</h3>
              <p className="body">{tx(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="placeholder">
        <span className="placeholder__label">{tx(t.proof.placeholderLabel)}</span>
        <p className="placeholder__text">{tx(t.proof.placeholderText)}</p>
      </div>
    </section>
  )
}
