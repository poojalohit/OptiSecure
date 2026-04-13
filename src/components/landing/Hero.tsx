import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const stats = [
  { value: '26%', label: 'Teams actively rationalizing spend' },
  { value: '44%', label: 'Org leaders lacking breach visibility' },
  { value: '40+', label: 'Average tools in enterprise stacks' },
  { value: '18–30%', label: 'Potential savings from consolidation' },
]

export default function Hero() {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="page-shell">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-6">
              Security portfolio intelligence
            </p>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.15rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Optimize your security stack with clear, defensible ROI.
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed mb-10 max-w-[35rem] mx-auto lg:mx-0">
              OptiSecure helps security leaders remove redundant tools, map compliance coverage, and model risk-adjusted return before each purchase decision.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg no-underline transition-colors text-[15px]"
              >
                Open product demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection('solution')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-slate-600 hover:text-slate-900 font-medium rounded-lg transition-colors text-[15px] bg-white border border-slate-200 cursor-pointer"
              >
                How it works
              </button>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200/80 bg-slate-50 p-7 lg:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-6">
              At a glance
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums tracking-tight">{s.value}</p>
                  <p className="text-[12px] text-slate-500 mt-1.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-14 lg:mt-16 pt-10 border-t border-slate-200">
          <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
            Designed for CISOs and security teams managing 10–40 tools under compliance pressure. Start with portfolio visibility, then prioritize actions based on measurable impact.
          </p>
        </div>
      </div>
    </section>
  )
}
