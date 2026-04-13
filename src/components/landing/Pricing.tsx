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
      'Multi-framework compliance',
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
      'Dedicated success manager',
      'Custom SLAs',
      'White-glove onboarding',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-slate-50/60 border-t border-slate-100">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
            Simple, Transparent Plans
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Annual contracts that scale with your security portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-10 flex flex-col ${
                tier.highlighted
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200/60'
              }`}
            >
              <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 ${tier.highlighted ? 'text-brand-400' : 'text-slate-400'}`}>
                {tier.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-5xl font-extrabold tracking-tight ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {tier.price}
                </span>
                <span className={`text-sm font-normal ${tier.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`text-sm mb-10 ${tier.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>
                {tier.description}
              </p>

              <ul className="space-y-4 flex-1 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-brand-400' : 'text-emerald-500'}`} />
                    <span className={`text-sm leading-relaxed ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-medium text-sm no-underline transition-colors ${
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

        <div className="flex items-center justify-center gap-16 mt-20 text-center">
          {[
            { label: 'Usage Overage', value: '$300/tool/yr' },
            { label: 'MSSP White-Label', value: '$40K/yr + $2K/client' },
            { label: 'Pro Services', value: '$15K–$50K/engagement' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
