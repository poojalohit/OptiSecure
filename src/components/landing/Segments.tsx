import { Target, Building2, Users, ChevronRight } from 'lucide-react'

const phases = [
  { phase: 'Phase 1 · Now', revenue: '$50K–$200K ARR', title: 'Mid-Market CISOs', desc: 'Financial services, healthcare, SaaS — tool sprawl without in-house modeling.', icon: Target, active: true },
  { phase: 'Phase 2 · 12–18 mo', revenue: '$200K–$500K ARR', title: 'Enterprise Leaders', desc: 'Fortune 1000 CISOs with $10M+ budgets and board mandates.', icon: Building2, active: false },
  { phase: 'Phase 3 · 24+ mo', revenue: 'Partner / Licensing', title: 'MSSPs & Consultants', desc: 'White-label for managed security providers.', icon: Users, active: false },
]

const why = [
  'Complex enough to need OptiSecure\'s analysis',
  'Small enough to lack in-house modeling teams',
  'Compliance pressure drives urgency to act',
]

export default function Segments() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand-600 mb-4">Go-to-Market</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Entry Strategy & Expansion
          </h2>
          <p className="text-base text-slate-400">
            Starting with mid-market enterprises — the ideal beachhead.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">Beachhead Market</p>
              <h3 className="text-xl font-bold mb-1">Mid-Market Enterprises</h3>
              <p className="text-sm text-slate-400 mb-6">500–5,000 employees · $5M–$50M budget</p>
              <div className="space-y-3 text-sm">
                {[['Role', 'CISO / VP of Security'], ['Vertical', 'FinServ, Healthcare, SaaS'], ['Pain', '10–30 tools, audit pressure'], ['Budget', '$50K–$200K/yr ARR']].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <span className="text-slate-500 w-14 shrink-0">{k}</span>
                    <span className="text-slate-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-6">Why Win Here First</p>
              <div className="space-y-5">
                {why.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-500 leading-relaxed">{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8">Expansion Roadmap</p>
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((p) => (
              <div key={p.phase} className={`bg-white rounded-xl p-6 text-center border ${p.active ? 'border-brand-200' : 'border-slate-200'}`}>
                <p.icon className={`w-5 h-5 mx-auto mb-3 ${p.active ? 'text-brand-500' : 'text-slate-300'}`} />
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">{p.phase}</p>
                <p className={`text-xs font-semibold mb-2 ${p.active ? 'text-brand-600' : 'text-slate-400'}`}>{p.revenue}</p>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
