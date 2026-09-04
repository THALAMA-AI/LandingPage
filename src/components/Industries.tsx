import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Industries() {
  const { tx } = useLang()

  return (
    <section className="band band--light">
      <div className="wrap section industries">
        <div className="problem__head">
          <span className="eyebrow eyebrow--dim">{tx(t.industries.label)}</span>
          <h2 className="h2">{tx(t.industries.headline)}</h2>
        </div>
        <div className="industries__grid">
          {t.industries.items.map(item => (
            <a key={item.id} id={item.id} href={`#${item.id}`} className="industry">
              <span className="industry__tag">{tx(item.tag)}</span>
              <h3 className="industry__title">{tx(item.title)}</h3>
              <p className="body">{tx(item.desc)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
