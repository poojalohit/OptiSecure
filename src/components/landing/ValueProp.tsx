import { Repeat, TrendingUp, ClipboardCheck } from 'lucide-react'

const pillars = [
  {
    icon: Repeat,
    title: 'De-duplicate the stack',
    body: 'See where capabilities overlap across vendors. Quantify overlap so you can consolidate with confidence.',
    gradient: 'from-brand-500 to-brand-600',
  },
  {
    icon: TrendingUp,
    title: 'Risk-adjusted ROI',
    body: 'Model spend vs. risk under your real budget. Export board-ready views tied to business outcomes.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Framework truth',
    body: 'Map controls to NIST, ISO 27001, and SOC 2. Spot gaps and over-coverage in one pass—not in slide decks.',
    gradient: 'from-violet-500 to-violet-600',
  },
]

export default function ValueProp() {
  return (
    <section id="solution" className="section-pad">
      <div className="page-shell">
        <header className="max-w-[36rem] mx-auto text-center mb-14 lg:mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-4">What you get</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight mb-4">
            Built for CISOs who need defensible numbers
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            Less sprawl. Clearer trade-offs. A single narrative for audit, finance, and the board.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 lg:p-9 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6`}>
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed flex-1">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
