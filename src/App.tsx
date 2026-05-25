import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import { IntroSequence } from './components/IntroSequence'
import { Navbar }        from './components/Navbar'
import { Hero }          from './components/Hero'
import { HowItWorks }    from './components/HowItWorks'
import { Hardware }      from './components/Hardware'
import { WhyDifferent }  from './components/WhyDifferent'
import { DemoVideo }     from './components/DemoVideo'
import { CTA }           from './components/CTA'
import { Footer }        from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <LangProvider>
      {!introDone && <IntroSequence onDone={() => setIntroDone(true)} />}

      <div style={{
        opacity: introDone ? 1 : 0,
        transition: 'opacity 0.8s ease 0.2s',
      }}>
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <Hardware />
          <WhyDifferent />
          <DemoVideo />
          <CTA />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
