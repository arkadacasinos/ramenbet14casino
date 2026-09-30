import { LandingHeader, LandingFooter } from '@/components/ramen-shell'
import { RamenHero } from '@/components/ramen-hero'
import { RamenGuide } from '@/components/ramen-guide'

export default function Page() {
  return (
    <>
      <a className="rm14-skip" href="#main">Перейти к содержанию</a>
      <LandingHeader />
      <main id="main" className="rm14-main">
        <RamenHero />
        <RamenGuide />
      </main>
      <LandingFooter />
    </>
  )
}

