import { Target, Building2, Users, ArrowRight } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1 · NOW',
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

export default function Segments() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Customer Segments & Beachhead</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            ICP, Entry Strategy & Expansion
          </h2>
          <p className="text-lg text-slate-600">
            Starting with mid-market enterprises — complex enough to need OptiSecure, small enough to lack in-house portfolio modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-brand-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-brand-200" />
              <span className="text-sm font-bold uppercase tracking-wider text-brand-200">Beachhead Market</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Mid-Market Enterprises</h3>
            <p className="text-brand-200 text-sm mb-6">500–5,000 employees · $5M–$50M security budget</p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3"><span className="font-semibold text-brand-200 w-16 shrink-0">Role:</span><span className="text-brand-100">CISO / VP of Security</span></div>
              <div className="flex gap-3"><span className="font-semibold text-brand-200 w-16 shrink-0">Vertical:</span><span className="text-brand-100">Financial Services, Healthcare, SaaS</span></div>
              <div className="flex gap-3"><span className="font-semibold text-brand-200 w-16 shrink-0">Pain:</span><span className="text-brand-100">10–30 tools, compliance audit pressure</span></div>
              <div className="flex gap-3"><span className="font-semibold text-brand-200 w-16 shrink-0">Budget:</span><span className="text-brand-100">$50K–$200K/yr ARR willingness</span></div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2 text-sm text-slate-600">
            <h4 className="text-lg font-bold text-slate-900 mb-3">Why Win Here First?</h4>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
              <span>Complex enough to need OptiSecure's analysis capabilities</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
              <span>Small enough to lack in-house portfolio modeling teams</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
              <span>Compliance pressure drives urgency to act immediately</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h4 className="text-center text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Expansion Roadmap</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className={`rounded-2xl p-6 border ${
                  phase.active
                    ? 'bg-white border-brand-200 shadow-md ring-1 ring-brand-100'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <phase.icon className={`w-5 h-5 ${phase.active ? 'text-brand-500' : 'text-slate-400'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{phase.phase}</span>
                </div>
                <p className={`text-sm font-bold mb-1 ${phase.active ? 'text-brand-600' : 'text-slate-500'}`}>{phase.revenue}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
