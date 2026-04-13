const metrics = [
  { value: '$500K', label: 'Year 1 ARR' },
  { value: '> 3.0x', label: 'LTV : CAC' },
  { value: '< 12 mo', label: 'Payback' },
  { value: '> 70%', label: 'Gross Margin' },
  { value: '> 110%', label: 'Net Retention' },
  { value: '> 50', label: 'NPS Score' },
  { value: '< 5%', label: 'Annual Churn' },
  { value: '< 14 days', label: 'Time-to-Value' },
  { value: '18–30%', label: 'Budget Saved' },
  { value: '500+', label: 'Tools Analyzed' },
  { value: '3', label: 'Frameworks' },
  { value: '1,000+', label: 'Risk Sims' },
]

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 md:py-32 bg-slate-50">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand-600 mb-4">Key Metrics</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We Know It's Working
          </h2>
          <p className="text-base text-slate-400">
            KPIs across business health, customer success, and product impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{m.value}</p>
              <p className="text-xs text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
