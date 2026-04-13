import { Target, Building2, Users } from 'lucide-react'

const phases = [
  { icon: Target, phase: 'Now', title: 'Mid-market', detail: '500–5K employees · complex enough to need modeling, small enough to move fast.' },
  { icon: Building2, phase: '12–18 mo', title: 'Enterprise', detail: 'Large programs, board reporting, and multi-year roadmaps.' },
  { icon: Users, phase: '24+ mo', title: 'Partners', detail: 'MSSPs and advisors white-labeling portfolio work for clients.' },
]

export default function Segments() {
  return (
    <section className="section-pad bg-slate-50/80 border-y border-slate-100">
      <div className="page-shell">
        <header className="max-w-[36rem] mx-auto text-center mb-14 lg:mb-16">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-4">Who it’s for</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight mb-4">
            Start where decisions are hardest
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            We focus first on security leaders balancing compliance pressure with finite budget and headcount.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((p) => (
            <div key={p.phase} className="text-center lg:text-left rounded-2xl bg-white border border-slate-200/80 p-8 shadow-sm">
              <p.icon className="w-5 h-5 text-brand-600 mx-auto lg:mx-0 mb-4" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">{p.phase}</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[14px] text-slate-400 mt-12 lg:mt-14 max-w-xl mx-auto">
          Ideal first customers: CISO or VP Security in financial services, healthcare, or SaaS—typically 10–30 tools and active audit cycles.
        </p>
      </div>
    </section>
  )
}
