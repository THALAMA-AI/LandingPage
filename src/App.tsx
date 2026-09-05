import { LangProvider } from './context/LangContext'
import { Header }        from './components/Header'
import { Hero }          from './components/Hero'
import { VideoSlot }     from './components/VideoSlot'
import { Problem }       from './components/Problem'
import { Counterweight } from './components/Counterweight'
import { HowItWorks }    from './components/HowItWorks'
import { WhereItRuns }   from './components/WhereItRuns'
import { Industries }    from './components/Industries'
import { FAQ }           from './components/FAQ'
import { Evaluation }    from './components/Evaluation'
import { Footer }        from './components/Footer'

// Placeholder until the final company video is dropped in.
const COMPANY_VIDEO = '/assets/intro-v1.mov'

export default function App() {
  return (
    <LangProvider>
      <div className="page">
        <Header />
        <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Hero />
          <VideoSlot src={COMPANY_VIDEO} />
          <Problem />
          <Counterweight />
          <HowItWorks />
          <WhereItRuns />
          <Industries />
          <FAQ />
          <Evaluation />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
