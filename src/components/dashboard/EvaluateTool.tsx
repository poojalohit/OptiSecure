import { useState } from 'react'
import { Search, ArrowRight, TrendingUp, ClipboardCheck, Layers, Plus, Check } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { computeRoi, computeRedundancyForNewTool, computeComplianceForNewTool } from '../../utils/analysis'
import { toolCatalog, type CatalogTool } from '../../data/toolCatalog'

export default function EvaluateTool() {
  const { tools, addTool, hasToolId, preset } = usePortfolio()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<CatalogTool | null>(null)
  const [added, setAdded] = useState(false)

  const available = toolCatalog
    .filter(t => !hasToolId(t.id))
    .filter(t => !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase()) || t.vendor.toLowerCase().includes(search.toLowerCase()))

  function handleAdd() {
    if (selected) {
      addTool(selected.id)
      setAdded(true)
    }
  }

  const roi = selected ? computeRoi(selected) : null
  const redundancy = selected ? computeRedundancyForNewTool(tools, selected) : []
  const compliance = selected ? computeComplianceForNewTool(tools, selected, preset?.requiredFrameworks ?? ['NIST', 'SOC 2']) : []

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Evaluate a New Tool</h1>
        <p className="text-sm text-slate-500 mt-1">Select a tool to see its ROI, compliance impact, and redundancy before buying.</p>
      </div>

      {!selected ? (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="relative mb-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by tool name, vendor, or category…" className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {available.map(t => (
              <button key={t.id} type="button" onClick={() => { setSelected(t); setAdded(false) }} className="text-left p-5 rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all cursor-pointer bg-white group">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-colors shrink-0" />
                </div>
                <p className="text-xs text-slate-400 mb-3">{t.vendor} · {t.category}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{t.description}</p>
                <p className="text-xs text-slate-400 mt-2">${(t.annualCost / 1000).toFixed(0)}K/yr · {t.riskReduction}% risk reduction</p>
              </button>
            ))}
            {available.length === 0 && <p className="col-span-full text-sm text-slate-400 py-8 text-center">All tools are already in your stack.</p>}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex-1 min-w-[300px]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Evaluating</p>
              <h2 className="text-lg font-bold text-slate-900 mb-1">{selected.name}</h2>
              <p className="text-sm text-slate-500 mb-3">{selected.vendor} · {selected.category}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {selected.capabilities.map(c => <span key={c} className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] text-slate-600">{c}</span>)}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => { setSelected(null); setSearch('') }} className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                  ← Pick different
                </button>
                {!added ? (
                  <button type="button" onClick={handleAdd} className="px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors cursor-pointer border-none inline-flex items-center gap-1.5">
                    <Plus className="w-4 h-4" /> Add to stack
                  </button>
                ) : (
                  <span className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Added
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-brand-500" />
                <h3 className="text-base font-semibold text-slate-900">ROI Analysis</h3>
              </div>
              {roi && (
                <div className="space-y-4">
                  <Row label="Annual cost" value={`$${(selected.annualCost / 1000).toFixed(0)}K`} />
                  <Row label="Risk reduction" value={`${selected.riskReduction}%`} />
                  <Row label="Estimated risk saved" value={`$${(roi.annualRiskSaved / 1000).toFixed(0)}K/yr`} />
                  <Row label="Net annual value" value={`$${(roi.netValue / 1000).toFixed(0)}K`} highlight={roi.netValue > 0 ? 'green' : 'red'} />
                  <Row label="ROI" value={`${roi.roiPercent > 0 ? '+' : ''}${roi.roiPercent}%`} highlight={roi.roiPercent > 0 ? 'green' : 'red'} />
                  <Row label="Payback period" value={`${roi.paybackMonths} months`} />
                </div>
              )}
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <ClipboardCheck className="w-5 h-5 text-violet-500" />
                <h3 className="text-base font-semibold text-slate-900">Compliance Impact</h3>
              </div>
              <div className="space-y-4">
                {compliance.map(c => (
                  <div key={c.framework} className="py-2 border-b border-slate-100 last:border-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-slate-900">{c.framework}</p>
                      {c.newGapsClosed > 0 ? (
                        <span className="text-xs font-medium text-emerald-600">+{c.newGapsClosed} gaps closed</span>
                      ) : (
                        <span className="text-xs text-slate-400">No new coverage</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{c.before.gaps} → {c.after.gaps} gaps remaining</p>
                    {c.newOverCoverage > 0 && <p className="text-xs text-amber-500 mt-0.5">+{c.newOverCoverage} over-covered controls</p>}
                  </div>
                ))}
                {compliance.length === 0 && <p className="text-sm text-slate-400">No applicable frameworks.</p>}
              </div>
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-5 h-5 text-red-400" />
                <h3 className="text-base font-semibold text-slate-900">Redundancy Check</h3>
              </div>
              {redundancy.length > 0 ? (
                <div className="space-y-4">
                  {redundancy.map((r, i) => (
                    <div key={i} className="py-2 border-b border-slate-100 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900">{r.existingTool.name}</p>
                        <span className={`text-xs font-semibold ${r.overlap > 40 ? 'text-red-500' : 'text-amber-500'}`}>{r.overlap}% overlap</span>
                      </div>
                      <p className="text-xs text-slate-400">Shared: {r.shared.join(', ')}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm text-emerald-600 font-medium">No significant overlap</p>
                  <p className="text-xs text-slate-400 mt-1">This tool adds unique capabilities to your stack.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: 'green' | 'red' }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className={`text-sm font-semibold ${highlight === 'green' ? 'text-emerald-600' : highlight === 'red' ? 'text-red-500' : 'text-slate-900'}`}>{value}</span>
    </div>
  )
}
