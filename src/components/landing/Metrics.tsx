const businessMetrics = [
  { value: '$500K', label: 'ARR', sublabel: 'Year 1', description: 'From first 10 mid-market contracts' },
  { value: '> 3.0x', label: 'LTV : CAC', sublabel: 'Ongoing', description: 'Healthy unit economics benchmark' },
  { value: '< 12 mo', label: 'Payback', sublabel: 'Ongoing', description: 'CAC ÷ monthly revenue per customer' },
  { value: '> 70%', label: 'Gross Margin', sublabel: 'Year 1', description: 'Software-first, low COGS model' },
]

const customerMetrics = [
  { value: '> 110%', label: 'NRR', sublabel: 'Year 1', description: 'Net Revenue Retention via expansion' },
  { value: '> 50', label: 'NPS', sublabel: 'Ongoing', description: 'CISO satisfaction & advocacy' },
  { value: '< 5%', label: 'Churn Rate', sublabel: 'Annual', description: 'Annual logo retention target' },
  { value: '< 14 days', label: 'Time-to-Value', sublabel: 'Onboarding', description: 'Days to first portfolio insight' },
]

const productMetrics = [
  { value: '18–30%', label: 'Budget Saved', sublabel: 'Per customer', description: 'Avg. reduction in redundant tool spend' },
  { value: '500+', label: 'Tools Analyzed', sublabel: 'Dataset', description: 'Vendor coverage in similarity model' },
  { value: '3', label: 'Frameworks', sublabel: 'Coverage', description: 'NIST / ISO 27001 / SOC 2 mapped' },
  { value: '1,000+', label: 'Risk Sims', sublabel: 'Per run', description: 'Monte Carlo scenarios modeled' },
]

function MetricGrid({ title, metrics, accent }: { title: string; metrics: typeof businessMetrics; accent: string }) {
  return (
    <div>
      <h3 className={`text-lg font-bold mb-6 ${accent}`}>{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <div className="text-2xl font-extrabold text-slate-900 mb-1">{m.value}</div>
            <div className="text-sm font-semibold text-slate-700">{m.label}</div>
            <div className="text-xs text-slate-400 mt-0.5">{m.sublabel}</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Metrics of Success</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            How We Know It's Working
          </h2>
          <p className="text-lg text-slate-600">
            Clear KPIs across business health, customer success, and product impact to track platform performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <MetricGrid title="Business Health" metrics={businessMetrics} accent="text-brand-600" />
          <MetricGrid title="Customer Success" metrics={customerMetrics} accent="text-emerald-600" />
          <MetricGrid title="Product Impact" metrics={productMetrics} accent="text-violet-600" />
        </div>
      </div>
    </section>
  )
}
