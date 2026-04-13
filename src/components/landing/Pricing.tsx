import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$18K',
    period: '/yr',
    description: 'Up to 15 tools',
    features: [
      'Portfolio redundancy analysis',
      'Basic compliance mapping (1 framework)',
      'Tool utilization tracking',
      'Monthly optimization reports',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$60K',
    period: '/yr',
    description: 'Up to 40 tools',
    features: [
      'Everything in Starter, plus:',
      'Risk-adjusted ROI modeling',
      'Multi-framework compliance (NIST, SOC 2, ISO)',
      'Budget optimization simulator',
      'Board-ready reports & dashboards',
      'Quarterly strategy reviews',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$150K+',
    period: '/yr',
    description: 'Unlimited tools',
    features: [
      'Everything in Growth, plus:',
      'Custom compliance frameworks',
      'Advanced risk simulation engine',
      'API access & integrations',
      'Dedicated customer success manager',
      'Custom SLAs',
      'White-glove onboarding',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
            Simple, Transparent Plans
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Tiered SaaS subscriptions that scale with your security portfolio. Annual contracts aligned to org size and feature depth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col ${
                tier.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-700'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-5 ${tier.highlighted ? 'text-brand-400' : 'text-slate-400'}`}>
                {tier.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-extrabold tracking-tight ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`text-sm mb-7 ${tier.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-brand-400' : 'text-emerald-500'}`} />
                    <span className={`text-sm leading-relaxed ${tier.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          {[
            { label: 'Usage Overage', value: '$300/tool/yr', sub: 'above plan tier limit' },
            { label: 'MSSP White-Label', value: '$40K/yr + $2K/client', sub: 'for managed providers' },
            { label: 'Professional Services', value: '$15K–$50K', sub: 'per engagement' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{item.label}</p>
              <p className="text-base font-bold text-slate-900">{item.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
