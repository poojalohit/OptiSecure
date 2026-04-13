import { Repeat, TrendingUp, ClipboardCheck, Check } from 'lucide-react'

const pillars = [
  {
    icon: Repeat,
    title: 'Redundancy Elimination',
    tagline: 'Stop paying twice for the same protection',
    features: [
      'Maps capability overlap across 500+ vendor tools',
      'Quantified redundancy scores per tool pairing',
      'Avg. enterprise saves 18–30% on license spend',
    ],
    gradient: 'from-brand-500 to-brand-600',
  },
  {
    icon: TrendingUp,
    title: 'Risk-Adjusted ROI',
    tagline: 'Prove security value to the board',
    features: [
      'Models risk under fixed budget constraints',
      'Marginal risk reduction quantified per dollar',
      'Board-ready reporting aligned to business outcomes',
    ],
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Alignment',
    tagline: 'Map coverage to frameworks, not narratives',
    features: [
      'Automated gap analysis vs. NIST, ISO 27001, SOC 2',
      'Highlights over-coverage and blind spots simultaneously',
      'Replaces vendor claims with structured control mapping',
    ],
    gradient: 'from-violet-500 to-violet-600',
  },
]

export default function ValueProp() {
  return (
    <section id="solution" className="py-32 bg-slate-50/60 border-t border-slate-100">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
            The OptiSecure Difference
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Data-driven portfolio decisions for CISOs who need to justify
            security ROI — not vendor-led gut-feel allocation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-10 border border-slate-200/60 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-8`}>
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-brand-500 font-medium mb-8">{pillar.tagline}</p>
              <ul className="space-y-4">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-500 leading-relaxed">{feature}</span>
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
