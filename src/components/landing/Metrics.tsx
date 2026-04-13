const rows = [
  {
    label: 'Business',
    items: [
      { value: '$500K', sub: 'Year-one ARR target' },
      { value: '> 3×', sub: 'LTV : CAC' },
      { value: '< 12 mo', sub: 'CAC payback' },
    ],
  },
  {
    label: 'Customers',
    items: [
      { value: '> 110%', sub: 'Net revenue retention' },
      { value: '< 5%', sub: 'Annual churn' },
      { value: '< 14 d', sub: 'Time to first insight' },
    ],
  },
  {
    label: 'Product',
    items: [
      { value: '18–30%', sub: 'Typical redundant spend cut' },
      { value: '500+', sub: 'Tools in similarity set' },
      { value: '1K+', sub: 'Sims per scenario run' },
    ],
  },
]

export default function Metrics() {
  return (
    <section id="metrics" className="section-pad bg-slate-50/80">
      <div className="page-shell">
        <header className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-4">Proof points</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 tracking-tight mb-4">
            Metrics we optimize for
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed">
            A concise scorecard across business performance, customer outcomes, and product impact.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-10">
          {rows.map((row) => (
            <div key={row.label}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-6">
                {row.label}
              </p>
              <div className="space-y-8">
                {row.items.map((item) => (
                  <div key={item.sub}>
                    <p className="text-2xl lg:text-3xl font-bold text-slate-900 tabular-nums tracking-tight">{item.value}</p>
                    <p className="text-[14px] text-slate-500 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
