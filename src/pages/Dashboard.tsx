import { useMemo } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from 'recharts'
import {
  ArrowUpRight,
  TrendingDown,
  ShieldCheck,
  Layers,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'
import {
  customer,
  tools,
  spendByCategory,
  redundancies,
  compliance,
  recommendations,
  summary,
} from '../data/sampleCustomer'

const palette = ['#2563eb', '#0ea5e9', '#06b6d4', '#10b981', '#f59e0b', '#a855f7', '#ec4899', '#94a3b8']

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`
  return `$${n}`
}

function formatCompact(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

export default function Dashboard() {
  const totalAnalyzedSpend = useMemo(
    () => spendByCategory.reduce((sum, c) => sum + c.spend, 0),
    [],
  )

  const overlapSpend = useMemo(
    () => redundancies.reduce((sum, r) => sum + r.potentialSaving, 0),
    [],
  )

  const overlapPct = Math.round((overlapSpend / totalAnalyzedSpend) * 100)

  const avgCompliance = Math.round(
    compliance.reduce((sum, c) => sum + c.coverage, 0) / compliance.length,
  )

  const topToolsByCost = [...tools].sort((a, b) => b.annualCost - a.annualCost).slice(0, 8)

  return (
    <div>
      <SiteNav />

      <main className="dash">
        <div className="dash-inner">
          {/* Hero */}
          <div className="dash-hero">
            <span className="dash-hero-banner">
              <Sparkles className="w-3.5 h-3.5" />
              Sample dashboard &middot; for illustration only
            </span>
            <h1 className="dash-hero-title">
              Northwind Financial Services: Security Portfolio
            </h1>
            <p className="dash-hero-subtitle">
              This is a mock-up of what an OptiSecure customer would see after
              connecting their security stack. The customer, tool list, and
              numbers are fictional, but the layout and analysis reflect how the
              real product is being designed.
            </p>
          </div>

          {/* Customer card */}
          <div className="dash-customer-card">
            <CustomerCell label="Customer" value={customer.name} meta={customer.industry} />
            <CustomerCell label="Employees" value={customer.employees} meta={customer.region} />
            <CustomerCell
              label="Annual security budget"
              value={formatCurrency(customer.annualBudget)}
              meta={`across ${customer.toolsTracked} tools`}
            />
            <CustomerCell
              label="Avg compliance coverage"
              value={`${avgCompliance}%`}
              meta="across 6 frameworks"
            />
          </div>

          {/* KPIs */}
          <div className="dash-kpis">
            <Kpi
              label="Tools tracked"
              value={String(customer.toolsTracked)}
              delta={{ kind: 'neutral', text: 'across 8 categories' }}
              icon={<Layers className="w-4 h-4 text-slate-400" />}
            />
            <Kpi
              label="Total annual spend"
              value={formatCurrency(customer.annualBudget)}
              delta={{ kind: 'up', text: '+6.2% vs last year' }}
              icon={<TrendingDown className="w-4 h-4 text-slate-400" />}
            />
            <Kpi
              label="Capability overlap"
              value={`${overlapPct}%`}
              delta={{
                kind: 'down',
                text: `${formatCurrency(overlapSpend)} potentially redundant`,
              }}
              icon={<AlertTriangle className="w-4 h-4 text-amber-500" />}
            />
            <Kpi
              label="Identified savings"
              value={formatCurrency(summary.totalIdentifiedSavings)}
              delta={{ kind: 'up', text: `+${summary.riskReductionImprovement}% net risk reduction` }}
              icon={<ShieldCheck className="w-4 h-4 text-emerald-500" />}
            />
          </div>

          {/* Section: Spend overview + recommendations */}
          <div className="dash-grid">
            <div className="dash-card">
              <div className="dash-card-header">
                <div>
                  <p className="dash-card-eyebrow">Portfolio overview</p>
                  <p className="dash-card-title">Where the security budget is going</p>
                  <p className="dash-card-subtitle">
                    Annual spend by category &middot; total{' '}
                    {formatCurrency(totalAnalyzedSpend)}
                  </p>
                </div>
              </div>
              <div className="dash-card-body" style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={spendByCategory}
                      dataKey="spend"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={2}
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {spendByCategory.map((_, i) => (
                        <Cell key={i} fill={palette[i % palette.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v: any) => formatCurrency(Number(v))}
                      contentStyle={tooltipStyle}
                      labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="dash-legend">
                {spendByCategory.map((c, i) => (
                  <div className="dash-legend-item" key={c.category}>
                    <span
                      className="dash-legend-dot"
                      style={{ background: palette[i % palette.length] }}
                    />
                    {c.category} &middot;{' '}
                    <span style={{ color: '#0f172a', fontWeight: 600 }}>
                      {formatCurrency(c.spend)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-card-header">
                <div>
                  <p className="dash-card-eyebrow">Recommendations</p>
                  <p className="dash-card-title">What to do this quarter</p>
                  <p className="dash-card-subtitle">
                    Ranked by financial impact and risk
                  </p>
                </div>
              </div>
              <div className="dash-card-body">
                <ul className="dash-recommend-list">
                  {recommendations.map((r, i) => (
                    <li key={i} className="dash-recommend-item">
                      <span className={`dash-recommend-tag ${r.kind}`}>
                        {r.kind}
                      </span>
                      <p className="dash-recommend-title">{r.title}</p>
                      <p className="dash-recommend-body">{r.body}</p>
                      {r.savingsLabel && (
                        <p
                          className="dash-recommend-savings"
                          style={
                            r.kind === 'gap'
                              ? { color: '#1d4ed8' }
                              : r.kind === 'reallocate'
                              ? { color: '#1d4ed8' }
                              : undefined
                          }
                        >
                          {r.savingsLabel}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Top tools bar + Compliance */}
          <div className="dash-grid">
            <div className="dash-card">
              <div className="dash-card-header">
                <div>
                  <p className="dash-card-eyebrow">Cost vs risk reduction</p>
                  <p className="dash-card-title">Top tools by annual cost</p>
                  <p className="dash-card-subtitle">
                    Bar length is annual cost. The number on the right is the
                    risk-reduction score (0 to 100), as estimated by
                    OptiSecure based on what each tool covers.
                  </p>
                </div>
              </div>
              <div className="dash-card-body" style={{ height: 360 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topToolsByCost}
                    layout="vertical"
                    margin={{ top: 5, right: 60, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#e2e8f0" horizontal={false} />
                    <XAxis
                      type="number"
                      tick={{ fontSize: 11, fill: '#94a3b8' }}
                      tickFormatter={(v: number) => formatCurrency(v)}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fontSize: 12, fill: '#475569' }}
                      width={170}
                    />
                    <Tooltip
                      formatter={(v: any, _name: any, props: any) => [
                        formatCurrency(Number(v)),
                        `${props.payload.vendor} \u00B7 risk score ${props.payload.riskReduction}`,
                      ]}
                      contentStyle={tooltipStyle}
                      labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                    />
                    <Bar dataKey="annualCost" fill="#2563eb" radius={[0, 6, 6, 0]}>
                      <LabelList
                        dataKey="riskReduction"
                        position="right"
                        formatter={(v: any) => `${v}/100`}
                        style={{ fill: '#0f172a', fontSize: 11, fontWeight: 600 }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-card-header">
                <div>
                  <p className="dash-card-eyebrow">Compliance coverage</p>
                  <p className="dash-card-title">How well are we protected?</p>
                  <p className="dash-card-subtitle">
                    Each row is a different rulebook the company has to follow.
                  </p>
                </div>
              </div>
              <div className="dash-card-body">
                {compliance.map(c => (
                  <div key={c.name} className="dash-compliance-row">
                    <div>
                      <div className="dash-compliance-name">{c.shortLabel}</div>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>{c.what}</div>
                    </div>
                    <div className="dash-compliance-track">
                      <div
                        className={`dash-compliance-fill ${c.status}`}
                        style={{ width: `${c.coverage}%` }}
                      />
                    </div>
                    <div className="dash-compliance-pct">{c.coverage}%</div>
                  </div>
                ))}
                <div className="dash-legend" style={{ marginTop: 14 }}>
                  <span className="dash-legend-item">
                    <span className="dash-legend-dot" style={{ background: '#10b981' }} />
                    Good (85%+)
                  </span>
                  <span className="dash-legend-item">
                    <span className="dash-legend-dot" style={{ background: '#f59e0b' }} />
                    Partial (70 to 84%)
                  </span>
                  <span className="dash-legend-item">
                    <span className="dash-legend-dot" style={{ background: '#ef4444' }} />
                    Gap (below 70%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Redundancy analysis */}
          <div className="dash-card" style={{ marginBottom: 16 }}>
            <div className="dash-card-header">
              <div>
                <p className="dash-card-eyebrow">Redundancy analysis</p>
                <p className="dash-card-title">
                  Where the same job is being done twice (or three times)
                </p>
                <p className="dash-card-subtitle">
                  Overlap score: 1.0 = the tools do exactly the same thing. 0.0
                  = they do not overlap at all. The savings column is what could
                  be cut without losing protection.
                </p>
              </div>
            </div>
            <div className="dash-card-body">
              {redundancies.map((r, i) => (
                <div key={i} className="dash-redundancy-row">
                  <div>
                    <div className="pair">{r.pair}</div>
                  </div>
                  <div>
                    <div className="capability">{r.capability}</div>
                  </div>
                  <div>
                    <div className="score">Overlap {r.overlap.toFixed(2)}</div>
                  </div>
                  <div className="saving">
                    {r.potentialSaving > 0
                      ? `Save ${formatCurrency(r.potentialSaving)}`
                      : 'Keep both'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool inventory table */}
          <div className="dash-table-wrap" style={{ marginBottom: 16 }}>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Category</th>
                  <th className="num">Annual cost</th>
                  <th className="num" style={{ minWidth: 140 }}>
                    Risk score
                  </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tools.map(t => (
                  <tr key={t.name}>
                    <td>
                      <div className="tool-name">{t.name}</div>
                      <div className="tool-vendor">{t.vendor}</div>
                    </td>
                    <td>{t.category}</td>
                    <td className="num">{formatCurrency(t.annualCost)}</td>
                    <td className="num">
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span className="dash-bar">
                          <span
                            className="dash-bar-fill"
                            style={{ width: `${t.riskReduction}%` }}
                          />
                        </span>
                        <span style={{ minWidth: 32, color: '#0f172a', fontWeight: 600 }}>
                          {t.riskReduction}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`dash-pill ${t.status.toLowerCase()}`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 24 }}>
            Showing top 12 of {customer.toolsTracked} tools by annual cost. The
            remaining {customer.toolsTracked - 12} tools represent{' '}
            {formatCurrency(
              customer.annualBudget - tools.reduce((s, t) => s + t.annualCost, 0),
            )}{' '}
            of additional annual spend.
          </p>

          {/* Bottom summary */}
          <div className="dash-card">
            <div className="dash-card-header">
              <div>
                <p className="dash-card-eyebrow">If you act on these recommendations</p>
                <p className="dash-card-title">Projected impact next year</p>
              </div>
              <Link to="/" className="site-nav-link" style={{ background: '#f1f5f9' }}>
                <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                Read the whitepaper
              </Link>
            </div>
            <div className="dash-card-body">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 16,
                }}
              >
                <SummaryStat
                  label="Identified savings"
                  value={formatCurrency(summary.totalIdentifiedSavings)}
                />
                <SummaryStat
                  label="Reinvestment"
                  value={formatCurrency(summary.netReinvestment)}
                />
                <SummaryStat
                  label="Net budget reduction"
                  value={formatCurrency(summary.netBudgetReduction)}
                />
                <SummaryStat
                  label="Net risk reduction change"
                  value={`+${summary.riskReductionImprovement}%`}
                />
              </div>
            </div>
          </div>

          <div className="dash-disclaimer">
            <strong>About this dashboard.</strong> Northwind Financial Services
            is a fictional company. The tools, vendors, costs, and scores are
            illustrative and meant to show what OptiSecure&apos;s analysis will
            look like for a real customer. The product is in active
            development.{' '}
            <Link to="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              Read the full whitepaper
            </Link>{' '}
            or sign up for early access
            <ArrowRight
              className="w-3 h-3"
              style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 2 }}
            />
            .
          </div>

          <p style={{ fontSize: 11, color: '#cbd5e1', marginTop: 16 }}>
            Dashboard scoring methodology &middot; capability overlap is computed
            as Jaccard similarity of mapped controls; risk-reduction scores are
            modelled from public benchmarks and adjusted to a 0 to 100 scale.
            Aggregate{' '}
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>
              {formatCompact(customer.toolsTracked)}
            </span>{' '}
            tools considered.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

const tooltipStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
  fontSize: 12.5,
  padding: '8px 10px',
  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
}

function CustomerCell({
  label,
  value,
  meta,
}: {
  label: string
  value: string
  meta: string
}) {
  return (
    <div className="dash-customer-cell">
      <div className="dash-customer-label">{label}</div>
      <div className="dash-customer-value">{value}</div>
      <div className="dash-customer-meta">{meta}</div>
    </div>
  )
}

function Kpi({
  label,
  value,
  delta,
  icon,
}: {
  label: string
  value: string
  delta: { kind: 'up' | 'down' | 'neutral'; text: string }
  icon?: React.ReactNode
}) {
  return (
    <div className="dash-kpi">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="dash-kpi-label">{label}</p>
        {icon}
      </div>
      <p className="dash-kpi-value">{value}</p>
      <p className={`dash-kpi-delta ${delta.kind}`}>{delta.text}</p>
    </div>
  )
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: '#94a3b8',
          textTransform: 'uppercase',
          marginBottom: 6,
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
      </p>
    </div>
  )
}
