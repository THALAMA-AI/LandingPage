import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Counterweight() {
  const { tx } = useLang()

  return (
    <section className="wrap section grid-2 grid-2--tight">
      <div className="stack" style={{ gap: 20 }}>
        <span className="eyebrow">{tx(t.counter.label)}</span>
        <h2 className="h2">{tx(t.counter.headline)}</h2>
        <p className="body body--lg">{tx(t.counter.sub)}</p>
      </div>
      <blockquote className="quote">
        <p className="quote__text">{tx(t.counter.quote)}</p>
        <cite className="quote__cite">{tx(t.counter.cite)}</cite>
      </blockquote>
    </section>
  )
}
