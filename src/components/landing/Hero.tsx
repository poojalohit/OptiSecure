import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const stats = [
  { value: '26%', label: 'CISOs rationalizing spend' },
  { value: '44%', label: 'lack breach detection' },
  { value: '40+', label: 'tools in large orgs' },
  { value: '0', label: 'AI portfolio optimizers' },
]

export default function Hero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="page-shell">
        <div className="max-w-[42rem] mx-auto text-center">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-6 lg:mb-8">
            Security portfolio intelligence
          </p>

          <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-6 lg:mb-8">
            Cut waste. Prove ROI.{' '}
            <span className="gradient-text">Own your stack.</span>
          </h1>

          <p className="text-[17px] lg:text-lg text-slate-500 leading-relaxed mb-10 lg:mb-12 max-w-[32rem] mx-auto">
            One place to see overlap, compliance gaps, and what each dollar actually buys—so you can brief the board with numbers, not noise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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

        <div className="mt-16 lg:mt-24 pt-12 lg:pt-14 border-t border-slate-200">
          <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4 lg:px-6">
                <p className="text-3xl lg:text-4xl font-bold text-slate-900 tabular-nums tracking-tight">{s.value}</p>
                <p className="text-[13px] text-slate-500 mt-2 max-w-[9rem] mx-auto leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
