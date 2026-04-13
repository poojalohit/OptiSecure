import { AlertTriangle, ArrowRight, DollarSign, Layers } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts'
import { redundancyPairs, securityTools } from '../../data/mockData'

const redundancyChartData = securityTools
  .map((t) => ({ name: t.name.split(' ')[0], redundancy: t.redundancyScore, cost: t.annualCost }))
  .sort((a, b) => b.redundancy - a.redundancy)

const totalSavings = redundancyPairs.reduce((sum, p) => sum + p.potentialSavings, 0)

export default function RedundancyAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Redundancy Analysis</h1>
        <p className="text-slate-500 mt-1">Identify overlapping capabilities and eliminate wasted spend</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-sm font-medium text-slate-500">Redundant Pairs</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{redundancyPairs.length}</div>
          <p className="text-xs text-slate-400 mt-1">tool pairings with significant overlap</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-sm font-medium text-slate-500">Avg. Overlap</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">
            {Math.round(redundancyPairs.reduce((s, p) => s + p.overlapPercent, 0) / redundancyPairs.length)}%
          </div>
          <p className="text-xs text-slate-400 mt-1">average capability overlap</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-sm font-medium text-slate-500">Potential Savings</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">${(totalSavings / 1000).toFixed(0)}K</div>
          <p className="text-xs text-slate-400 mt-1">annual spend recoverable</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Redundancy Score by Tool</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={redundancyChartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={100} stroke="#94a3b8" />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar dataKey="redundancy" radius={[0, 6, 6, 0]} name="Redundancy Score">
              {redundancyChartData.map((entry, i) => (
                <Cell key={i} fill={entry.redundancy > 40 ? '#ef4444' : entry.redundancy > 20 ? '#f59e0b' : '#10b981'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">Overlapping Tool Pairs</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {redundancyPairs.map((pair, i) => (
            <div key={i} className="px-6 py-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-900">{pair.toolA}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-900">{pair.toolB}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold ${pair.overlapPercent > 50 ? 'text-red-500' : pair.overlapPercent > 30 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {pair.overlapPercent}% overlap
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    Save ${(pair.potentialSavings / 1000).toFixed(0)}K/yr
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${pair.overlapPercent > 50 ? 'bg-red-400' : pair.overlapPercent > 30 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                    style={{ width: `${pair.overlapPercent}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {pair.sharedCapabilities.map((cap) => (
                  <span key={cap} className="inline-flex px-2.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">{cap}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
