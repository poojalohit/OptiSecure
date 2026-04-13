import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '26%', label: 'CISOs rationalizing tools' },
  { value: '44%', label: "can't detect breaches" },
  { value: '40+', label: 'tools at large enterprises' },
  { value: '0', label: 'AI-native optimizers exist' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-32 pb-24">
        <div className="text-center">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-8">
            AI-Powered Security Portfolio Optimization
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto">
            Stop Overspending on{' '}
            <span className="gradient-text">Security Tools</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Eliminate redundant controls, quantify risk-adjusted ROI, and make
            data-driven portfolio decisions — not vendor-led gut-feel allocation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-28">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full no-underline transition-all text-[15px]"
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-8 py-4 text-slate-500 hover:text-slate-900 font-medium rounded-full no-underline transition-all text-[15px]"
            >
              See How It Works
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-6 text-center ${i > 0 ? 'border-l border-slate-100' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">{stat.value}</div>
                <div className="text-[13px] text-slate-400 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
