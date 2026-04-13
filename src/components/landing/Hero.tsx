import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'

const stats = [
  { value: '26%', label: 'of CISOs actively rationalizing tools' },
  { value: '44%', label: "can't detect breaches with current tools" },
  { value: '40+', label: 'security tools at large enterprises' },
  { value: '0', label: 'AI-native portfolio optimizers exist' },
]

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute top-32 right-[-200px] w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-600 text-xs font-semibold tracking-wide uppercase mb-10">
            <Shield className="w-3.5 h-3.5" />
            AI-Powered Security Portfolio Optimization
          </div>

          <h1 className="text-[3.5rem] lg:text-[4.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-7">
            Stop Overspending on
            <span className="gradient-text block mt-1">Security Tools</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            OptiSecure helps CISOs eliminate redundant controls,
            quantify risk-adjusted ROI, and make data-driven portfolio decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl no-underline transition-all shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/25 text-[15px]"
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-600 font-semibold rounded-xl no-underline transition-all border border-slate-200 text-[15px]"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto mt-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-6 px-4">
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-[13px] text-slate-400 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
