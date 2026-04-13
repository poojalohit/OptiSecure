import { useState } from 'react'
import { Plus, Trash2, DollarSign, Shield, Layers, ClipboardCheck, Search } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { computeRoi, computeRedundancies, computeCompliance, computePortfolioSummary } from '../../utils/analysis'
import { toolCatalog } from '../../data/toolCatalog'

export default function MyStack() {
  const { tools, removeTool, addTool, hasToolId, preset } = usePortfolio()
  const [showAdd, setShowAdd] = useState(false)
  const [search, setSearch] = useState('')

  const summary = computePortfolioSummary(tools)
  const redundancies = computeRedundancies(tools)
  const compliance = computeCompliance(tools, preset?.requiredFrameworks ?? ['NIST', 'SOC 2'])

  const addable = toolCatalog
    .filter(t => !hasToolId(t.id))
    .filter(t => !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-bold text-slate-900">My Security Stack</h1>
          <p className="text-sm text-slate-500 mt-1">Your current tools and their combined analysis.</p>
        </div>
        <button type="button" onClick={() => setShowAdd(!showAdd)} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer border-none">
          <Plus className="w-4 h-4" /> Add tool
        </button>
      </div>

      {showAdd && (
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search tools by name or category…" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-72 overflow-y-auto">
            {addable.map(t => (
              <button key={t.id} type="button" onClick={() => { addTool(t.id); setShowAdd(false); setSearch('') }} className="text-left p-4 rounded-lg border border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-all cursor-pointer bg-white">
                <p className="text-sm font-medium text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{t.category} · ${(t.annualCost / 1000).toFixed(0)}K/yr</p>
              </button>
            ))}
            {addable.length === 0 && <p className="col-span-full text-sm text-slate-400 py-4 text-center">No matching tools available to add.</p>}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat icon={DollarSign} label="Annual spend" value={`$${(summary.totalSpend / 1000).toFixed(0)}K`} sub={`${summary.totalTools} tools`} color="text-brand-500" bg="bg-brand-50" />
        <Stat icon={Shield} label="Risk coverage" value={`${summary.totalRisk.toFixed(0)}%`} sub={`${summary.avgRisk}% avg per tool`} color="text-emerald-500" bg="bg-emerald-50" />
        <Stat icon={Layers} label="Redundant spend" value={`$${(summary.redundantSpend / 1000).toFixed(0)}K`} sub={`${summary.redundancyPairs} overlapping pairs`} color="text-red-500" bg="bg-red-50" />
        <Stat icon={ClipboardCheck} label="Compliance" value={`${compliance.length} frameworks`} sub={`${compliance.reduce((s, c) => s + c.gaps, 0)} total gaps`} color="text-amber-500" bg="bg-amber-50" />
      </div>

      <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">Tools in your stack</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-slate-50 text-left">
              <th className="px-6 py-3 font-medium text-slate-500">Tool</th>
              <th className="px-6 py-3 font-medium text-slate-500">Category</th>
              <th className="px-6 py-3 font-medium text-slate-500 text-right">Cost</th>
              <th className="px-6 py-3 font-medium text-slate-500 text-right">Risk reduction</th>
              <th className="px-6 py-3 font-medium text-slate-500 text-right">ROI</th>
              <th className="px-6 py-3 font-medium text-slate-500">Frameworks</th>
              <th className="px-6 py-3" />
            </tr></thead>
            <tbody className="divide-y divide-slate-100">
              {tools.map(t => {
                const roi = computeRoi(t)
                return (
                  <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3.5"><span className="font-medium text-slate-900">{t.name}</span><br /><span className="text-xs text-slate-400">{t.vendor}</span></td>
                    <td className="px-6 py-3.5 text-slate-600">{t.category}</td>
                    <td className="px-6 py-3.5 text-right text-slate-900 font-medium">${(t.annualCost / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-3.5 text-right text-slate-900">{t.riskReduction}%</td>
                    <td className="px-6 py-3.5 text-right"><span className={`font-medium ${roi.roiPercent > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{roi.roiPercent > 0 ? '+' : ''}{roi.roiPercent}%</span></td>
                    <td className="px-6 py-3.5"><div className="flex flex-wrap gap-1">{t.complianceFrameworks.map(f => <span key={f} className="px-2 py-0.5 rounded-full bg-slate-100 text-[11px] text-slate-600">{f}</span>)}</div></td>
                    <td className="px-6 py-3.5"><button type="button" onClick={() => removeTool(t.id)} className="p-1.5 rounded-md hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors cursor-pointer bg-transparent border-none"><Trash2 className="w-4 h-4" /></button></td>
                  </tr>
                )
              })}
              {tools.length === 0 && <tr><td colSpan={7} className="px-6 py-8 text-center text-slate-400">No tools in your stack yet. Click "Add tool" above.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>

      {redundancies.length > 0 && (
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Redundancy alerts</h2>
          <div className="space-y-4">
            {redundancies.slice(0, 5).map((r, i) => (
              <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{r.a.name} ↔ {r.b.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{r.shared.join(', ')}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-sm font-semibold ${r.overlap > 40 ? 'text-red-500' : 'text-amber-500'}`}>{r.overlap}% overlap</p>
                  <p className="text-xs text-emerald-600">Save ~${(r.savings / 1000).toFixed(0)}K/yr</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Compliance coverage</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compliance.map(c => (
            <div key={c.framework} className="p-4 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-slate-900">{c.framework}</p>
                <p className="text-xs font-medium text-slate-500">{c.covered}/{c.totalControls}</p>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className={`h-full rounded-full ${c.covered / c.totalControls > 0.8 ? 'bg-emerald-500' : c.covered / c.totalControls > 0.5 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${Math.min(100, (c.covered / c.totalControls) * 100)}%` }} />
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-red-500">{c.gaps} gaps</span>
                {c.overCovered > 0 && <span className="text-amber-500">{c.overCovered} over-covered</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ icon: Icon, label, value, sub, color, bg }: { icon: typeof DollarSign; label: string; value: string; sub: string; color: string; bg: string }) {
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
