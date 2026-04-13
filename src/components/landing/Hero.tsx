import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const stats = [
  { value: '26%', label: 'CISOs rationalizing tools' },
  { value: '44%', label: "can't detect breaches" },
  { value: '40+', label: 'tools at large enterprises' },
  { value: '0', label: 'AI-native optimizers' },
]

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-brand-600 mb-6">
            AI-Powered Security Portfolio Optimization
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Stop Overspending on{' '}
            <span className="gradient-text">Security Tools</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Eliminate redundant controls, quantify risk-adjusted ROI, and make
            data-driven portfolio decisions.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-20">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg no-underline transition-colors text-sm"
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => scrollToSection('solution')}
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-500 hover:text-slate-800 font-medium rounded-lg transition-colors text-sm bg-transparent border border-slate-200 cursor-pointer"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-4 divide-x divide-slate-200">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4 py-2">
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{s.value}</p>
              <p className="text-xs text-slate-400 mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
