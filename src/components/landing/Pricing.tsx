import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Starter', price: '$18K', period: '/yr', desc: 'Up to 15 tools', highlighted: false,
    features: ['Portfolio redundancy analysis', 'Basic compliance mapping', 'Tool utilization tracking', 'Monthly reports', 'Email support'],
  },
  {
    name: 'Growth', price: '$60K', period: '/yr', desc: 'Up to 40 tools', highlighted: true,
    features: ['Everything in Starter', 'Risk-adjusted ROI modeling', 'Multi-framework compliance', 'Budget optimizer', 'Board-ready dashboards', 'Priority support'],
  },
  {
    name: 'Enterprise', price: '$150K+', period: '/yr', desc: 'Unlimited tools', highlighted: false,
    features: ['Everything in Growth', 'Custom frameworks', 'Advanced risk simulation', 'API access', 'Dedicated CSM', 'White-glove onboarding'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand-600 mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, Transparent Plans
          </h2>
          <p className="text-base text-slate-400">
            Annual contracts that scale with your portfolio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-8 flex flex-col ${t.highlighted ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>
              <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 ${t.highlighted ? 'text-brand-400' : 'text-slate-400'}`}>
                {t.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-extrabold tracking-tight ${t.highlighted ? 'text-white' : 'text-slate-900'}`}>{t.price}</span>
                <span className="text-sm text-slate-400">{t.period}</span>
              </div>
              <p className={`text-sm mb-8 ${t.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>{t.desc}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlighted ? 'text-brand-400' : 'text-emerald-500'}`} />
                    <span className={`text-sm ${t.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm no-underline transition-colors ${
                  t.highlighted ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Started <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto flex items-center justify-center gap-12 mt-16 flex-wrap">
          {[
            { l: 'Overage', v: '$300/tool/yr' },
            { l: 'MSSP License', v: '$40K + $2K/client' },
            { l: 'Pro Services', v: '$15K–$50K' },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{x.l}</p>
              <p className="text-sm font-semibold text-slate-700">{x.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
