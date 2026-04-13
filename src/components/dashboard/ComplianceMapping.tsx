import { CheckCircle2, AlertTriangle, XCircle, Shield } from 'lucide-react'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts'
import { complianceFrameworks } from '../../data/mockData'

const radarData = complianceFrameworks.map((f) => ({
  framework: f.shortName,
  coverage: Math.round((f.coveredControls / f.totalControls) * 100),
  overCoverage: Math.round((f.overCovered / f.totalControls) * 100),
}))

const gapData = complianceFrameworks.map((f) => ({
  name: f.shortName,
  gaps: f.gapControls,
  overCovered: f.overCovered,
}))

export default function ComplianceMapping() {
  const totalControls = complianceFrameworks.reduce((s, f) => s + f.totalControls, 0)
  const totalCovered = complianceFrameworks.reduce((s, f) => s + f.coveredControls, 0)
  const totalGaps = complianceFrameworks.reduce((s, f) => s + f.gapControls, 0)
  const totalOver = complianceFrameworks.reduce((s, f) => s + f.overCovered, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Compliance Mapping</h1>
        <p className="text-slate-500 mt-1">Map your tool coverage to security frameworks — identify gaps and over-coverage</p>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-brand-500" />
            <span className="text-sm font-medium text-slate-500">Total Controls</span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{totalControls}</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-slate-500">Covered</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-600">{totalCovered}</div>
          <p className="text-xs text-slate-400 mt-1">{Math.round((totalCovered / totalControls) * 100)}% coverage</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-slate-500">Gaps</span>
          </div>
          <div className="text-2xl font-extrabold text-red-500">{totalGaps}</div>
          <p className="text-xs text-slate-400 mt-1">controls not covered</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium text-slate-500">Over-Covered</span>
          </div>
          <div className="text-2xl font-extrabold text-amber-500">{totalOver}</div>
          <p className="text-xs text-slate-400 mt-1">redundant control mappings</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Framework Coverage Radar</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="framework" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Coverage %" dataKey="coverage" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
              <Radar name="Over-Coverage %" dataKey="overCoverage" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} strokeWidth={2} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Gaps vs Over-Coverage</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={gapData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="gaps" name="Gap Controls" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="overCovered" name="Over-Covered" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">Framework Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-3 font-semibold text-slate-600">Framework</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-center">Total Controls</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-center">Covered</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-center">Gaps</th>
                <th className="px-6 py-3 font-semibold text-slate-600 text-center">Over-Covered</th>
                <th className="px-6 py-3 font-semibold text-slate-600">Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {complianceFrameworks.map((fw) => {
                const coverage = Math.round((fw.coveredControls / fw.totalControls) * 100)
                return (
                  <tr key={fw.shortName} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{fw.name}</div>
                      <div className="text-xs text-slate-400">{fw.shortName}</div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-slate-900">{fw.totalControls}</td>
                    <td className="px-6 py-4 text-center font-medium text-emerald-600">{fw.coveredControls}</td>
                    <td className="px-6 py-4 text-center font-medium text-red-500">{fw.gapControls}</td>
                    <td className="px-6 py-4 text-center font-medium text-amber-500">{fw.overCovered}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${coverage > 80 ? 'bg-emerald-500' : coverage > 60 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${coverage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-600">{coverage}%</span>
                      </div>
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
