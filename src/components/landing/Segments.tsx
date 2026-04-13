import { Target, Building2, Users, ChevronRight } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1 · Now',
    revenue: '$50K–$200K ARR',
    title: 'Mid-Market CISOs',
    description: 'Financial services, healthcare, SaaS — tool sprawl without in-house modeling teams.',
    icon: Target,
    active: true,
  },
  {
    phase: 'Phase 2 · 12–18 mo',
    revenue: '$200K–$500K ARR',
    title: 'Enterprise Security Leaders',
    description: 'Fortune 1000 CISOs with $10M+ budgets and board reporting mandates.',
    icon: Building2,
    active: false,
  },
  {
    phase: 'Phase 3 · 24+ mo',
    revenue: 'Partner / Licensing',
    title: 'MSSPs & Consulting Firms',
    description: 'White-label for managed security providers advising client portfolios.',
    icon: Users,
    active: false,
  },
]

export default function Segments() {
  return (
    <section className="py-32 border-t border-slate-100">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-4">Go-to-Market</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
            Entry Strategy & Expansion
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Starting with mid-market enterprises — complex enough to need OptiSecure, small enough to lack in-house modeling.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-900 rounded-2xl p-10 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">Beachhead Market</p>
              <h3 className="text-2xl font-bold mb-2">Mid-Market Enterprises</h3>
              <p className="text-slate-400 text-sm mb-8">500–5,000 employees · $5M–$50M security budget</p>

              <div className="space-y-5 text-sm">
                {[
                  ['Role', 'CISO / VP of Security'],
                  ['Vertical', 'Financial Services, Healthcare, SaaS'],
                  ['Pain', '10–30 tools, compliance audit pressure'],
                  ['Budget', '$50K–$200K/yr ARR willingness'],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-6">
                    <span className="text-slate-500 w-16 shrink-0">{key}</span>
                    <span className="text-slate-300">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8">Why Win Here First</h4>
              <div className="space-y-6">
                {[
                  'Complex enough to need OptiSecure\'s analysis capabilities',
                  'Small enough to lack in-house portfolio modeling teams',
                  'Compliance pressure drives urgency to act immediately',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <ChevronRight className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-[15px] text-slate-500 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-10">Expansion Roadmap</p>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className={`text-center rounded-2xl p-8 border transition-all ${
                  phase.active
                    ? 'bg-white border-brand-200 shadow-sm'
                    : 'bg-white border-slate-100'
                }`}
              >
                <phase.icon className={`w-5 h-5 mx-auto mb-4 ${phase.active ? 'text-brand-500' : 'text-slate-300'}`} />
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">{phase.phase}</p>
                <p className={`text-xs font-semibold mb-3 ${phase.active ? 'text-brand-600' : 'text-slate-400'}`}>{phase.revenue}</p>
                <h3 className="text-base font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
