import { useState } from 'react'
import { TrendingUp, DollarSign, Shield, Target } from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis, Legend
} from 'recharts'
import { riskSimulationData, securityTools } from '../../data/mockData'

const roiData = securityTools.map((t) => ({
  name: t.name.split(' ')[0],
  cost: t.annualCost,
  riskReduction: t.riskReduction,
  roi: ((t.riskReduction * 100000) / t.annualCost * 100).toFixed(0),
  utilization: t.utilizationRate,
}))

export default function RoiCalculator() {
  const [budget, setBudget] = useState(1233000)

  const currentPoint = riskSimulationData.find((d) => d.budget <= budget) || riskSimulationData[0]
  const optimizedRisk = Math.min(currentPoint.riskScore + 8, 95)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">ROI & Risk Modeling</h1>
        <p className="text-slate-500 mt-1">Quantify marginal risk reduction per dollar and model budget scenarios</p>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-brand-500" />
            <span className="text-sm font-medium text-slate-500">Current Budget</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">${(budget / 1000000).toFixed(2)}M</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-slate-500">Current Risk Score</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{currentPoint.riskScore}/100</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-brand-500" />
            <span className="text-sm font-medium text-slate-500">Optimized Score</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">{optimizedRisk}/100</div>
          <p className="text-xs text-emerald-500 mt-1">+{optimizedRisk - currentPoint.riskScore} pts with optimization</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium text-slate-500">Avg. $/Risk Point</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">
            ${Math.round(budget / currentPoint.riskScore / 100).toLocaleString()}
          </div>
          <p className="text-xs text-slate-400 mt-1">cost per risk reduction point</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h3 className="text-lg font-bold text-slate-900">Budget → Risk Coverage Simulator</h3>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-600">Budget:</label>
            <input
              type="range"
              min={500000}
              max={2000000}
              step={50000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-48 accent-brand-600"
            />
            <span className="text-sm font-bold text-slate-900 w-20">${(budget / 1000000).toFixed(2)}M</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={riskSimulationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="budget"
              tickFormatter={(v: number) => `$${(v / 1000000).toFixed(1)}M`}
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
            />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
            <Tooltip
              formatter={(value, name) => [name === 'riskScore' ? `${value}/100` : value, name === 'riskScore' ? 'Risk Score' : 'Tools']}
              labelFormatter={(v) => `Budget: $${(Number(v) / 1000000).toFixed(2)}M`}
            />
            <Line type="monotone" dataKey="riskScore" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} name="Risk Score" />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-400 mt-3 text-center">
          Diminishing returns visible beyond $1.4M — each additional dollar yields less marginal risk reduction
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Tool ROI: Cost vs Risk Reduction</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="cost"
              name="Annual Cost"
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`}
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
              label={{ value: 'Annual Cost', position: 'insideBottom', offset: -5, style: { fontSize: 12 } }}
            />
            <YAxis
              dataKey="riskReduction"
              name="Risk Reduction"
              tick={{ fontSize: 12 }}
              stroke="#94a3b8"
              label={{ value: 'Risk Reduction %', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
            />
            <ZAxis dataKey="utilization" range={[100, 600]} name="Utilization" />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'Annual Cost') return `$${Number(value).toLocaleString()}`
                if (name === 'Utilization') return `${value}%`
                return `${value}%`
              }}
              labelFormatter={() => ''}
            />
            <Scatter name="Tools" data={roiData} fill="#3b82f6" fillOpacity={0.7} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
          </ScatterChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-400 mt-3 text-center">
          Bubble size indicates tool utilization rate — larger bubbles = higher utilization
        </p>
      </div>
    </div>
  )
}
