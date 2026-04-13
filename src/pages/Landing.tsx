import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Problems from '../components/landing/Problems'
import ValueProp from '../components/landing/ValueProp'
import Segments from '../components/landing/Segments'
import Pricing from '../components/landing/Pricing'
import Metrics from '../components/landing/Metrics'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <ValueProp />
      <Segments />
      <Pricing />
      <Metrics />
      <Footer />
    </div>
  )
}
