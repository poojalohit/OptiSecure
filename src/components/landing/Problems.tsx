import { DollarSign, Layers, EyeOff, Megaphone } from 'lucide-react'

const problems = [
  {
    icon: DollarSign,
    title: 'Overspending',
    description: 'Enterprises burn $1M–$10M+ annually on security tools with unclear ROI — boards are demanding accountability.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Layers,
    title: 'Redundant Controls',
    description: '44% of large orgs run 40+ security tools. Compliance-driven buying creates overlapping measures and wasted spend.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: EyeOff,
    title: 'Zero Visibility',
    description: 'CISOs cannot quantify marginal risk reduction per tool. 76% say identifying the right solutions has grown more complex.',
    color: 'text-brand-500',
    bg: 'bg-brand-50',
  },
  {
    icon: Megaphone,
    title: 'Vendor-Driven Decisions',
    description: 'Budget choices rely on vendor marketing, not data. No standardized AI system exists to model security value objectively.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Problem Identification</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Why CISOs Are Losing the Budget Battle
          </h2>
          <p className="text-lg text-slate-600">
            The cybersecurity market will reach <span className="font-bold text-slate-900">$520B by 2026</span> — yet most enterprises can't prove their security investments are working.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div key={problem.title} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`w-12 h-12 rounded-xl ${problem.bg} flex items-center justify-center mb-5`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
