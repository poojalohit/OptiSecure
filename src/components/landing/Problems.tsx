import { DollarSign, Layers, EyeOff, Megaphone } from 'lucide-react'

const problems = [
  {
    icon: DollarSign,
    title: 'Overspending',
    description: 'Enterprises burn $1M–$10M+ annually on security tools with unclear ROI — boards demand accountability.',
    color: 'text-red-400',
    bg: 'bg-red-50',
  },
  {
    icon: Layers,
    title: 'Redundant Controls',
    description: '44% of large orgs run 40+ security tools. Compliance-driven buying creates overlapping spend.',
    color: 'text-amber-400',
    bg: 'bg-amber-50',
  },
  {
    icon: EyeOff,
    title: 'Zero Visibility',
    description: 'CISOs can\'t quantify risk reduction per tool. 76% say identifying the right solutions has grown more complex.',
    color: 'text-brand-400',
    bg: 'bg-brand-50',
  },
  {
    icon: Megaphone,
    title: 'Vendor-Driven Decisions',
    description: 'Budget choices rely on vendor marketing, not data. No AI system exists to model security value objectively.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-50',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-32 border-t border-slate-100">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
            Why CISOs Are Losing the Budget Battle
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            The cybersecurity market will reach <span className="font-semibold text-slate-600">$520B by 2026</span> — yet most enterprises can't prove their investments are working.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {problems.map((problem) => (
            <div key={problem.title} className="text-center">
              <div className={`w-14 h-14 rounded-2xl ${problem.bg} flex items-center justify-center mx-auto mb-6`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
