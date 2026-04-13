import { DollarSign, Layers, EyeOff, Megaphone } from 'lucide-react'

const problems = [
  {
    icon: DollarSign,
    number: '01',
    title: 'Overspending',
    description: 'Enterprises burn $1M–$10M+ annually on security tools with unclear ROI — boards are demanding accountability.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Layers,
    number: '02',
    title: 'Redundant Controls',
    description: '44% of large orgs run 40+ security tools. Compliance-driven buying creates overlapping measures and wasted spend.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: EyeOff,
    number: '03',
    title: 'Zero Visibility',
    description: 'CISOs cannot quantify marginal risk reduction per tool. 76% say identifying the right solutions has grown more complex.',
    color: 'text-brand-500',
    bg: 'bg-brand-50',
    border: 'border-brand-100',
  },
  {
    icon: Megaphone,
    number: '04',
    title: 'Vendor-Driven Decisions',
    description: 'Budget choices rely on vendor marketing, not data. No standardized AI system exists to model security value objectively.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-28 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Problem Identification</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
            Why CISOs Are Losing the Budget Battle
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            The cybersecurity market will reach <span className="font-semibold text-slate-700">$520B by 2026</span> — yet most enterprises can't prove their security investments are working.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div key={problem.title} className={`bg-white rounded-2xl p-8 border ${problem.border} hover:shadow-md transition-all`}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-11 h-11 rounded-xl ${problem.bg} flex items-center justify-center`}>
                  <problem.icon className={`w-5 h-5 ${problem.color}`} />
                </div>
                <span className="text-xs font-bold text-slate-300 tracking-widest">{problem.number}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">{problem.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
