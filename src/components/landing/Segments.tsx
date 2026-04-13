import { Target, Building2, Users, ChevronRight } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1 · Now',
    revenue: '$50K–$200K ARR',
    title: 'Mid-Market CISOs',
    description: 'Financial services, healthcare, SaaS. Tool sprawl without in-house modeling teams.',
    icon: Target,
    active: true,
  },
  {
    phase: 'Phase 2 · 12–18 mo',
    revenue: '$200K–$500K ARR',
    title: 'Enterprise Security Leaders',
    description: 'Fortune 1000 CISOs with $10M+ budgets, 30+ tool stacks, and board reporting mandates.',
    icon: Building2,
    active: false,
  },
  {
    phase: 'Phase 3 · 24+ mo',
    revenue: 'Partner / Licensing',
    title: 'MSSPs & Consulting Firms',
    description: 'White-label the platform for managed security providers advising client portfolios.',
    icon: Users,
    active: false,
  },
]

const whyPoints = [
  'Complex enough to need OptiSecure\'s analysis capabilities',
  'Small enough to lack in-house portfolio modeling teams',
  'Compliance pressure drives urgency to act immediately',
]

export default function Segments() {
  return (
    <section className="py-28 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Go-to-Market</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
            Entry Strategy & Expansion
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Starting with mid-market enterprises — complex enough to need OptiSecure, small enough to lack in-house portfolio modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-16">
          <div className="lg:col-span-3 bg-brand-600 rounded-2xl p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-200 mb-5">Beachhead Market</p>
            <h3 className="text-2xl font-bold mb-1">Mid-Market Enterprises</h3>
            <p className="text-brand-200 text-sm mb-7">500–5,000 employees · $5M–$50M security budget</p>

            <div className="space-y-4 text-sm">
              {[
                ['Role', 'CISO / VP of Security'],
                ['Vertical', 'Financial Services, Healthcare, SaaS'],
                ['Pain', '10–30 tools, compliance audit pressure'],
                ['Budget', '$50K–$200K/yr ARR willingness'],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-4">
                  <span className="font-semibold text-brand-300 w-16 shrink-0">{key}</span>
                  <span className="text-white/90">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">Why Win Here First</h4>
            <div className="space-y-4">
              {whyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-500 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Expansion Roadmap</p>
          <div className="grid md:grid-cols-3 gap-5">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className={`rounded-2xl p-6 border transition-all ${
                  phase.active
                    ? 'bg-white border-brand-200 shadow-md'
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <phase.icon className={`w-4 h-4 ${phase.active ? 'text-brand-500' : 'text-slate-400'}`} />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{phase.phase}</span>
                </div>
                <p className={`text-xs font-bold mb-1 ${phase.active ? 'text-brand-600' : 'text-slate-400'}`}>{phase.revenue}</p>
                <h3 className="text-base font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
