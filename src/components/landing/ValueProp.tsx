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
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: TrendingUp,
    title: 'Risk-Adjusted ROI',
    tagline: 'Prove security value to the board',
    features: [
      'Models risk under fixed budget constraints',
      'Marginal risk reduction quantified per dollar spent',
      'Board-ready reporting aligned to business outcomes',
    ],
    gradient: 'from-emerald-500 to-emerald-700',
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
    gradient: 'from-violet-500 to-violet-700',
  },
]

export default function ValueProp() {
  return (
    <section id="solution" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Value Proposition</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
            The OptiSecure Difference
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            For CISOs & Security Leaders who need to justify security ROI — OptiSecure delivers
            data-driven portfolio decisions, not vendor-led gut-feel allocation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6`}>
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
              <p className="text-sm text-brand-600 font-medium mb-6">{pillar.tagline}</p>
              <ul className="space-y-3 flex-1">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-500 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-14 max-w-xl mx-auto leading-relaxed">
          No direct AI-native competitor exists — OptiSecure uniquely targets budget optimization & risk simulation for security portfolios.
        </p>
      </div>
    </section>
  )
}
