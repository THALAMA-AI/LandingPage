import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'
import { EvalTable } from './EvalTable'

export function HowItWorks() {
  const { tx } = useLang()

  return (
    <section id="how" className="band band--lined">
      <div className="wrap section how">
        <div className="how__head">
          <div className="how__head-text">
            <span className="eyebrow">{tx(t.how.label)}</span>
            <h2 className="h2">{tx(t.how.headline)}</h2>
          </div>
          <p className="body how__aside">{tx(t.how.aside)}</p>
        </div>

        <EvalTable />

        <div className="grid-4">
          {t.how.stages.map(s => (
            <div key={s.num} className="stage">
              <span className="stage__num">{s.num}</span>
              <h3 className="h3 h3--lg">{tx(s.title)}</h3>
              <p className="body">{tx(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
