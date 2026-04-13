import {
  DollarSign, Shield, Layers, TrendingUp, AlertTriangle, CheckCircle2, XCircle
} from 'lucide-react'
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend
} from 'recharts'
import { portfolioStats, budgetAllocationData, monthlySpendTrend, securityTools } from '../../data/mockData'

const COLORS = ['#3b82f6', '#06b6d4', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899', '#64748b', '#14b8a6']

const statCards = [
  { label: 'Total Annual Spend', value: `$${(portfolioStats.totalAnnualSpend / 1000).toFixed(0)}K`, icon: DollarSign, color: 'text-brand-500', bg: 'bg-brand-50' },
  { label: 'Security Tools', value: portfolioStats.totalTools, icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Redundant Spend', value: `$${(portfolioStats.redundantSpend / 1000).toFixed(0)}K`, icon: Layers, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Risk Coverage Score', value: `${portfolioStats.riskScore}/100`, icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50' },
]

const statusIcon = { active: CheckCircle2, underperforming: AlertTriangle, redundant: XCircle }
const statusColor = { active: 'text-emerald-500', underperforming: 'text-amber-500', redundant: 'text-red-500' }
const statusBg = { active: 'bg-emerald-50', underperforming: 'bg-amber-50', redundant: 'bg-red-50' }

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Portfolio Overview</h1>
        <p className="text-slate-500 mt-1">Your security tool portfolio at a glance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-500">{card.label}</span>
              <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Budget Allocation by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetAllocationData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                dataKey="spend"
                nameKey="category"
              >
                {budgetAllocationData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${(Number(value) / 1000).toFixed(0)}K`} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Spend Trend: Current vs Optimized</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlySpendTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip formatter={(value) => `$${(Number(value) / 1000).toFixed(0)}K`} />
              <Area type="monotone" dataKey="spend" stroke="#ef4444" fill="#fef2f2" strokeWidth={2} name="Current Spend" />
              <Area type="monotone" dataKey="optimized" stroke="#10b981" fill="#ecfdf5" strokeWidth={2} name="Optimized" />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">Tool Inventory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-3 font-semibold text-slate-600">Tool</th>
                <th className="px-6 py-3 font-semibold text-slate-600">Category</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-right">Annual Cost</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-right">Risk Reduction</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-right">Utilization</th>
                <th className="px-6 py-3 font-semibold text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {securityTools.map((tool) => {
                const StatusIcon = statusIcon[tool.status]
                return (
                  <tr key={tool.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3">
                      <div className="font-medium text-slate-900">{tool.name}</div>
                      <div className="text-xs text-slate-400">{tool.vendor}</div>
                    </td>
                    <td className="px-6 py-3 text-slate-600">{tool.category}</td>
                    <td className="px-6 py-3 text-right font-medium text-slate-900">${tool.annualCost.toLocaleString()}</td>
                    <td className="px-6 py-3 text-right font-medium text-slate-900">{tool.riskReduction}%</td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${tool.utilizationRate > 80 ? 'bg-emerald-500' : tool.utilizationRate > 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${tool.utilizationRate}%` }}
                          />
                        </div>
                        <span className="text-slate-600 w-8 text-right">{tool.utilizationRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusBg[tool.status]} ${statusColor[tool.status]}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {tool.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
