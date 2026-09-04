import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Problem() {
  const { tx } = useLang()

  return (
    <section className="band band--light">
      <div className="wrap section problem">
        <div className="problem__head">
          <span className="eyebrow eyebrow--dim">{tx(t.problem.label)}</span>
          <h2 className="h2">{tx(t.problem.headline)}</h2>
        </div>

        <div className="grid-3">
          {t.problem.items.map((item, i) => (
            <div key={i} className="problem__item">
              <h3 className="h3 h3--md">{tx(item.title)}</h3>
              <p className="body body--md">{tx(item.desc)}</p>
            </div>
          ))}
        </div>

        <div className="callout">
          <span className="callout__label">{tx(t.problem.calloutLabel)}</span>
          <p className="callout__text">{tx(t.problem.calloutText)}</p>
        </div>
      </div>
    </section>
  )
}
