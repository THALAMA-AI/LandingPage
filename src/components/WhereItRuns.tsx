import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function WhereItRuns() {
  const { tx } = useLang()

  return (
    <section className="wrap section grid-2">
      <div className="where">
        <span className="eyebrow">{tx(t.where.label)}</span>
        <h2 className="h2 h2--md">{tx(t.where.headline)}</h2>
        <div className="stack">
          {t.where.places.map(p => (
            <div key={p.letter} className="where__row">
              <span className="where__letter">{p.letter}</span>
              <div className="where__body">
                <h3 className="h3">{tx(p.title)}</h3>
                <p className="body">{tx(p.desc)}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="body body--md" style={{ maxWidth: 460 }}>{tx(t.where.note)}</p>
      </div>

      <div className="own">
        <span className="eyebrow">{tx(t.own.label)}</span>
        <h2 className="h2 h2--sm">{tx(t.own.headline)}</h2>
        <div className="own__list">
          {t.own.items.map((item, i) => (
            <div key={i} className="own__item">
              <h3 className="h3">{tx(item.title)}</h3>
              <p className="body">{tx(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
