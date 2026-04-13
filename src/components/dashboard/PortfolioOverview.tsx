import { Link } from 'react-router-dom'
import { DollarSign, Shield, Layers, ClipboardCheck, ArrowRight, TrendingUp, ShoppingCart } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { computePortfolioSummary, computeCompliance, computeRoi } from '../../utils/analysis'

export default function PortfolioOverview() {
  const { tools, preset } = usePortfolio()
  const summary = computePortfolioSummary(tools)
  const compliance = computeCompliance(tools, preset?.requiredFrameworks ?? ['NIST', 'SOC 2'])
  const topRoi = tools.map(t => ({ ...t, roi: computeRoi(t) })).sort((a, b) => b.roi.roiPercent - a.roi.roiPercent)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{preset?.companyName ?? 'Portfolio'} Overview</h1>
        <p className="text-sm text-slate-500 mt-1">{preset?.name ?? 'Your'} security portfolio at a glance · {preset?.cisoName ?? 'CISO'}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} label="Annual spend" value={`$${(summary.totalSpend / 1000).toFixed(0)}K`} sub={`${summary.totalTools} tools`} color="text-brand-500" bg="bg-brand-50" />
        <StatCard icon={Shield} label="Risk coverage" value={`${summary.totalRisk.toFixed(0)}%`} sub={`${summary.avgRisk}% avg/tool`} color="text-emerald-500" bg="bg-emerald-50" />
        <StatCard icon={Layers} label="Redundant spend" value={`$${(summary.redundantSpend / 1000).toFixed(0)}K`} sub={`${summary.redundancyPairs} pairs`} color="text-red-500" bg="bg-red-50" />
        <StatCard icon={ClipboardCheck} label="Compliance gaps" value={`${compliance.reduce((s, c) => s + c.gaps, 0)}`} sub={`across ${compliance.length} frameworks`} color="text-amber-500" bg="bg-amber-50" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-slate-900">Top tools by ROI</h2>
            <Link to="/dashboard/stack" className="text-xs text-brand-600 hover:text-brand-700 no-underline font-medium inline-flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-3">
            {topRoi.slice(0, 5).map(t => (
              <div key={t.id} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">${(t.annualCost / 1000).toFixed(0)}K/yr · {t.riskReduction}% risk reduction</p>
                </div>
                <span className={`text-sm font-semibold ${t.roi.roiPercent > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{t.roi.roiPercent > 0 ? '+' : ''}{t.roi.roiPercent}% ROI</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-slate-900">Compliance status</h2>
            <Link to="/dashboard/stack" className="text-xs text-brand-600 hover:text-brand-700 no-underline font-medium inline-flex items-center gap-1">Details <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-4">
            {compliance.map(c => {
              const pct = Math.round((c.covered / c.totalControls) * 100)
              return (
                <div key={c.framework}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium text-slate-900">{c.framework}</p>
                    <p className="text-xs text-slate-500">{pct}% covered</p>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${pct > 80 ? 'bg-emerald-500' : pct > 50 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${Math.min(100, pct)}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/dashboard/stack" className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all no-underline group">
          <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-brand-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Manage your stack</p>
            <p className="text-xs text-slate-500 mt-0.5">Add/remove tools, view ROI, compliance, and redundancy analysis.</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
        </Link>
        <Link to="/dashboard/evaluate" className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all no-underline group">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Evaluate a purchase</p>
            <p className="text-xs text-slate-500 mt-0.5">Analyze ROI, compliance impact, and redundancy before adding a tool.</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
        </Link>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, sub, color, bg }: { icon: typeof DollarSign; label: string; value: string; sub: string; color: string; bg: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center`}><Icon className={`w-5 h-5 ${color}`} /></div>
        <span className="text-sm text-slate-500">{label}</span>
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
    </div>
  )
}
