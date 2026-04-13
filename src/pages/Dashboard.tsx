import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'
import PortfolioOverview from '../components/dashboard/PortfolioOverview'
import MyStack from '../components/dashboard/MyStack'
import EvaluateTool from '../components/dashboard/EvaluateTool'
import { usePortfolio } from '../context/PortfolioContext'

const sections: Record<string, React.FC> = {
  overview: PortfolioOverview,
  stack: MyStack,
  evaluate: EvaluateTool,
}

export default function Dashboard() {
  const { section } = useParams()
  const [collapsed, setCollapsed] = useState(false)
  const { preset } = usePortfolio()

  if (!preset) return <Navigate to="/onboarding" replace />

  const SectionComponent = sections[section ?? 'overview'] || PortfolioOverview

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-60'}`}>
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">OptiSecure</p>
            <p className="text-sm text-slate-500 mt-0.5">{preset.companyName} · {preset.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-xs font-medium text-brand-600">
              {preset.requiredFrameworks.join(' · ')}
            </span>
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
              {preset.cisoName.split(' ').map(w => w[0]).join('')}
            </div>
          </div>
        </header>
        <div className="p-8">
          <SectionComponent />
        </div>
      </main>
    </div>
  )
}
