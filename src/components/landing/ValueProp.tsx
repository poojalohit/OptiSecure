import { Repeat, TrendingUp, ClipboardCheck, Zap } from 'lucide-react'

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
    color: 'from-brand-500 to-blue-600',
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
    color: 'from-emerald-500 to-teal-600',
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
    color: 'from-violet-500 to-purple-600',
  },
]

export default function ValueProp() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Value Proposition</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            The OptiSecure Difference
          </h2>
          <p className="text-lg text-slate-600">
            For CISOs & Security Leaders who need to justify security ROI, OptiSecure delivers
            <span className="font-semibold text-slate-800"> data-driven portfolio decisions</span> —
            unlike vendor-led, gut-feel budget allocation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="relative group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-brand-600 font-medium mb-5">{pillar.tagline}</p>
                <ul className="space-y-3 flex-1">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-600">
                      <Zap className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-50 border border-brand-200 text-sm text-brand-700">
            <Zap className="w-4 h-4" />
            No direct AI-native competitor — OptiSecure uniquely targets budget optimization & risk simulation
          </div>
        </div>
      </div>
    </section>
  )
}
