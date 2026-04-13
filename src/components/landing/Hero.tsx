import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingDown, BarChart3, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '26%', label: 'of CISOs actively rationalizing tools', icon: TrendingDown },
  { value: '44%', label: "can't detect breaches with current tools", icon: Shield },
  { value: '40+', label: 'security tools at large enterprises', icon: BarChart3 },
  { value: '0', label: 'AI-native portfolio optimizers exist', icon: CheckCircle2 },
]

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-emerald-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            AI-Powered Security Portfolio Optimization
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Stop Overspending on
            <span className="gradient-text block">Security Tools</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            OptiSecure helps CISOs and security leaders eliminate redundant controls,
            quantify risk-adjusted ROI, and make data-driven portfolio decisions —
            not vendor-led, gut-feel budget allocation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl no-underline transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 text-lg"
            >
              Explore the Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl no-underline transition-all border border-slate-200 text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <stat.icon className="w-5 h-5 text-brand-500 mb-3" />
              <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
