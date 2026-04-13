import { DollarSign, Layers, EyeOff, Megaphone } from 'lucide-react'

const problems = [
  { icon: DollarSign, title: 'Runaway spend', line: 'Millions on tools with fuzzy ROI.' },
  { icon: Layers, title: 'Duplicate coverage', line: 'Dozens of products doing the same job.' },
  { icon: EyeOff, title: 'No marginal view', line: 'Hard to show risk removed per dollar.' },
  { icon: Megaphone, title: 'Vendor narratives', line: 'Budgets follow pitches, not models.' },
]

export default function Problems() {
  return (
    <section id="problems" className="section-pad bg-slate-50/80">
      <div className="page-shell">
        <header className="max-w-[36rem] mx-auto text-center mb-14 lg:mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-4">The gap</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight mb-4">
            Security budgets are under scrutiny
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            Cyber spend is heading toward <span className="text-slate-700 font-medium">$520B by 2026</span>. Most teams still can’t tie tools to outcomes.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 items-start p-6 lg:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-slate-700" />
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">{p.line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
