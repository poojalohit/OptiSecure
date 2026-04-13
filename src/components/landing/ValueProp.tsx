import { Repeat, TrendingUp, ClipboardCheck, Check } from 'lucide-react'

const pillars = [
  {
    icon: Repeat,
    title: 'Redundancy Elimination',
    tagline: 'Stop paying twice for the same protection',
    features: ['Maps overlap across 500+ vendor tools', 'Quantified redundancy scores per pairing', 'Avg. enterprise saves 18–30% on spend'],
    gradient: 'from-brand-500 to-brand-600',
  },
  {
    icon: TrendingUp,
    title: 'Risk-Adjusted ROI',
    tagline: 'Prove security value to the board',
    features: ['Models risk under fixed budget constraints', 'Risk reduction quantified per dollar spent', 'Board-ready reports aligned to outcomes'],
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Alignment',
    tagline: 'Map coverage to frameworks, not narratives',
    features: ['Gap analysis vs. NIST, ISO 27001, SOC 2', 'Highlights over-coverage and blind spots', 'Structured control mapping, not vendor claims'],
    gradient: 'from-violet-500 to-violet-600',
  },
]

export default function ValueProp() {
  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand-600 mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The OptiSecure Difference
          </h2>
          <p className="text-base text-slate-400">
            Data-driven portfolio decisions — not vendor-led gut-feel allocation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-slate-50 rounded-2xl p-8">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6`}>
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-sm text-brand-500 font-medium mb-6">{p.tagline}</p>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-500 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
