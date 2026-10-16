import { LazyMotion, domAnimation } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Store from './components/Store'
import Testimonials from './components/Testimonials'
import Marquee from './components/Marquee'
import Location from './components/Location'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Store />
        <Testimonials />
        <Location />
      </main>
      <CtaBand />
      <Footer />
    </LazyMotion>
  )
}
