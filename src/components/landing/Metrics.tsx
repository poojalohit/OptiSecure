const allMetrics = [
  { value: '$500K', label: 'Year 1 ARR', group: 'Business' },
  { value: '> 3.0x', label: 'LTV : CAC', group: 'Business' },
  { value: '< 12 mo', label: 'Payback Period', group: 'Business' },
  { value: '> 70%', label: 'Gross Margin', group: 'Business' },
  { value: '> 110%', label: 'Net Revenue Retention', group: 'Customer' },
  { value: '> 50', label: 'NPS Score', group: 'Customer' },
  { value: '< 5%', label: 'Annual Churn', group: 'Customer' },
  { value: '< 14 days', label: 'Time-to-Value', group: 'Customer' },
  { value: '18–30%', label: 'Budget Saved', group: 'Product' },
  { value: '500+', label: 'Tools Analyzed', group: 'Product' },
  { value: '3', label: 'Frameworks Mapped', group: 'Product' },
  { value: '1,000+', label: 'Risk Simulations', group: 'Product' },
]

export default function Metrics() {
  return (
    <section id="metrics" className="py-32 border-t border-slate-100">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide mb-4">Key Metrics</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
            How We Know It's Working
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
            Clear KPIs across business health, customer success, and product impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
          {allMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`text-center py-10 px-6 ${
                i % 4 !== 0 ? 'border-l border-slate-100' : ''
              } ${i >= 4 ? 'border-t border-slate-100' : ''}`}
            >
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{m.value}</div>
              <div className="text-[13px] text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
