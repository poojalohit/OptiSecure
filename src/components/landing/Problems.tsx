import { DollarSign, Layers, EyeOff, Megaphone } from 'lucide-react'

const problems = [
  { icon: DollarSign, title: 'Overspending', desc: 'Enterprises burn $1M–$10M+ annually on tools with unclear ROI.', color: 'text-red-400', bg: 'bg-red-50' },
  { icon: Layers, title: 'Redundant Controls', desc: '44% of large orgs run 40+ tools — overlapping spend everywhere.', color: 'text-amber-400', bg: 'bg-amber-50' },
  { icon: EyeOff, title: 'Zero Visibility', desc: '76% of CISOs say identifying the right solutions has grown harder.', color: 'text-brand-400', bg: 'bg-brand-50' },
  { icon: Megaphone, title: 'Vendor-Driven Decisions', desc: 'Budget choices rely on marketing, not data or AI modeling.', color: 'text-emerald-400', bg: 'bg-emerald-50' },
]

export default function Problems() {
  return (
    <section id="problems" className="py-24 md:py-32 bg-slate-50">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand-600 mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why CISOs Are Losing the Budget Battle
          </h2>
          <p className="text-base text-slate-400">
            The cybersecurity market hits <span className="text-slate-600 font-semibold">$520B by 2026</span> — yet most can't prove their investments work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {problems.map((p) => (
            <div key={p.title} className="text-center">
              <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mx-auto mb-5`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
