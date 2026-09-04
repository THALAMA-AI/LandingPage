import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export function Hero() {
  const { tx } = useLang()

  return (
    <section id="top" className="wrap hero">
      <span className="eyebrow">{tx(t.hero.eyebrow)}</span>
      <h1 className="h1">
        {tx(t.hero.line1)}<br />{tx(t.hero.line2)}
      </h1>
      <p className="lead">{tx(t.hero.sub)}</p>
      <div className="hero__actions">
        <a href="#evaluation" className="btn btn--accent">{tx(t.hero.cta1)}</a>
        <a href="#how" className="btn btn--outline">{tx(t.hero.cta2)}</a>
      </div>
    </section>
  )
}
