import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$18K',
    period: '/year',
    cap: 'Up to 15 tools',
    highlighted: false,
    features: ['Overlap & redundancy views', 'One compliance framework', 'Utilization & renewal signals', 'Monthly summary'],
  },
  {
    name: 'Growth',
    price: '$60K',
    period: '/year',
    cap: 'Up to 40 tools',
    highlighted: true,
    features: ['Everything in Starter', 'ROI & budget scenarios', 'NIST, SOC 2, ISO mapping', 'Executive & board exports', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: '$150K+',
    period: '/year',
    cap: 'Unlimited tools',
    highlighted: false,
    features: ['Everything in Growth', 'Custom frameworks & APIs', 'Advanced simulations', 'Named success lead', 'Custom terms'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="page-shell">
        <header className="max-w-[36rem] mx-auto text-center mb-14 lg:mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight mb-4">
            Annual plans by portfolio size
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            Straightforward tiers. Add tools or services as you grow.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-6 lg:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 flex flex-col h-full ${
                t.highlighted ? 'bg-slate-900 text-white ring-2 ring-slate-900' : 'bg-white border border-slate-200/80 shadow-sm'
              }`}
            >
              <p className={`text-[11px] font-semibold uppercase tracking-widest mb-6 ${t.highlighted ? 'text-brand-400' : 'text-slate-400'}`}>
                {t.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-bold tabular-nums tracking-tight ${t.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {t.price}
                </span>
                <span className={`text-sm ${t.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>{t.period}</span>
              </div>
              <p className={`text-[15px] mb-8 ${t.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{t.cap}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlighted ? 'text-brand-400' : 'text-emerald-500'}`} />
                    <span className={`text-[15px] leading-snug ${t.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`mt-auto flex items-center justify-center gap-2 py-3.5 rounded-lg font-medium text-[15px] no-underline transition-colors ${
                  t.highlighted ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Start with demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
          {[
            { l: 'Overage', v: '$300 / tool / year' },
            { l: 'MSSP', v: '$40K base + $2K / client' },
            { l: 'Services', v: '$15K–$50K engagements' },
          ].map((x) => (
            <div key={x.l}>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">{x.l}</p>
              <p className="text-[15px] font-medium text-slate-700">{x.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
