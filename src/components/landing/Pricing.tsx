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
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Revenue Model</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            How OptiSecure Gets Paid
          </h2>
          <p className="text-lg text-slate-600">
            Tiered SaaS subscriptions that scale with your security portfolio. Annual contracts aligned to org size and feature depth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/25 ring-2 ring-brand-400 scale-[1.03]'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-lg font-bold mb-1 ${tier.highlighted ? 'text-brand-100' : 'text-slate-500'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-extrabold ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {tier.price}
                </span>
                <span className={`text-lg ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${tier.highlighted ? 'text-brand-200' : 'text-emerald-500'}`} />
                    <span className={`text-sm ${tier.highlighted ? 'text-brand-100' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="p-4">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Usage Overage</p>
            <p className="text-lg font-bold text-slate-900 mt-1">$300/tool/yr</p>
            <p className="text-sm text-slate-500">above plan tier limit</p>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">MSSP White-Label</p>
            <p className="text-lg font-bold text-slate-900 mt-1">$40K/yr + $2K/client</p>
            <p className="text-sm text-slate-500">for managed providers</p>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Professional Services</p>
            <p className="text-lg font-bold text-slate-900 mt-1">$15K–$50K</p>
            <p className="text-sm text-slate-500">per engagement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
