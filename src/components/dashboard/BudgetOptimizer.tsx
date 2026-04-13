import { useState } from 'react'
import { DollarSign, TrendingDown, Zap, CheckCircle2, XCircle } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { securityTools, budgetAllocationData } from '../../data/mockData'

interface Recommendation {
  action: 'consolidate' | 'keep' | 'replace' | 'negotiate'
  tool: string
  detail: string
  savings: number
  risk: 'low' | 'medium' | 'high'
}

const recommendations: Recommendation[] = [
  { action: 'consolidate', tool: 'Palo Alto Cortex XDR', detail: 'Consolidate EDR/XDR into CrowdStrike Falcon — 68% capability overlap, lower utilization.', savings: 145000, risk: 'low' },
  { action: 'consolidate', tool: 'Microsoft Sentinel', detail: 'Consolidate cloud SIEM into Splunk Enterprise Security — 72% overlap, underutilized.', savings: 95000, risk: 'medium' },
  { action: 'consolidate', tool: 'Qualys VMDR', detail: 'Consolidate vulnerability management into Tenable.io — 64% overlap on scanning.', savings: 55000, risk: 'low' },
  { action: 'negotiate', tool: 'Splunk Enterprise Security', detail: 'Renegotiate contract at renewal — current pricing 15% above market benchmark.', savings: 33000, risk: 'low' },
  { action: 'keep', tool: 'CrowdStrike Falcon', detail: 'Core EDR platform with highest risk reduction and utilization. Essential tool.', savings: 0, risk: 'low' },
  { action: 'keep', tool: 'Okta Identity Cloud', detail: '94% utilization, critical IAM infrastructure. No overlap with other tools.', savings: 0, risk: 'low' },
]

const riskColor = { low: 'text-emerald-500', medium: 'text-amber-500', high: 'text-red-500' }
const riskBg = { low: 'bg-emerald-50', medium: 'bg-amber-50', high: 'bg-red-50' }
const actionColor = { consolidate: 'bg-red-50 text-red-600', keep: 'bg-emerald-50 text-emerald-600', replace: 'bg-brand-50 text-brand-600', negotiate: 'bg-amber-50 text-amber-600' }

const optimizedData = budgetAllocationData.map((d) => ({
  ...d,
  optimized: d.category === 'Endpoint Security' ? d.spend - 145000 : d.category === 'SIEM & Analytics' ? d.spend - 95000 : d.category === 'Vulnerability Mgmt' ? d.spend - 55000 : d.spend,
}))

export default function BudgetOptimizer() {
  const [showOptimized, setShowOptimized] = useState(false)
  const totalSavings = recommendations.reduce((s, r) => s + r.savings, 0)
  const totalSpend = securityTools.reduce((s, t) => s + t.annualCost, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Budget Optimizer</h1>
        <p className="text-slate-500 mt-1">AI-driven recommendations to optimize your security portfolio spend</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-brand-500" />
            <span className="text-sm font-medium text-slate-500">Current Spend</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">${(totalSpend / 1000).toFixed(0)}K</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-slate-500">Potential Savings</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">${(totalSavings / 1000).toFixed(0)}K</div>
          <p className="text-xs text-emerald-500 mt-1">{Math.round((totalSavings / totalSpend) * 100)}% reduction</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium text-slate-500">Optimized Spend</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">${((totalSpend - totalSavings) / 1000).toFixed(0)}K</div>
          <p className="text-xs text-slate-400 mt-1">with same risk coverage</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900">Budget Comparison: Current vs Optimized</h3>
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-slate-500">Show Optimized</span>
            <div
              className={`w-10 h-5 rounded-full transition-colors ${showOptimized ? 'bg-brand-600' : 'bg-slate-300'} relative cursor-pointer`}
              onClick={() => setShowOptimized(!showOptimized)}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${showOptimized ? 'left-5.5' : 'left-0.5'}`} />
            </div>
          </label>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={optimizedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="category" tick={{ fontSize: 10, angle: -20 }} stroke="#94a3b8" height={60} />
            <YAxis tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip formatter={(v) => `$${(Number(v) / 1000).toFixed(0)}K`} />
            <Bar dataKey="spend" name="Current Spend" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            {showOptimized && <Bar dataKey="optimized" name="Optimized" fill="#10b981" radius={[4, 4, 0, 0]} />}
            <Legend wrapperStyle={{ fontSize: '12px' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">Optimization Recommendations</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {recommendations.map((rec, i) => (
            <div key={i} className="px-6 py-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  {rec.action === 'keep' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  ) : rec.action === 'consolidate' ? (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  ) : (
                    <Zap className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-slate-900">{rec.tool}</span>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${actionColor[rec.action]}`}>
                        {rec.action}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{rec.detail}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {rec.savings > 0 && (
                    <div className="text-sm font-bold text-emerald-600">Save ${(rec.savings / 1000).toFixed(0)}K/yr</div>
                  )}
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${riskBg[rec.risk]} ${riskColor[rec.risk]}`}>
                    {rec.risk} risk
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
