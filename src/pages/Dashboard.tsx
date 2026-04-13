import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'
import Overview from '../components/dashboard/Overview'
import RedundancyAnalysis from '../components/dashboard/RedundancyAnalysis'
import ComplianceMapping from '../components/dashboard/ComplianceMapping'
import RoiCalculator from '../components/dashboard/RoiCalculator'
import BudgetOptimizer from '../components/dashboard/BudgetOptimizer'

const sections: Record<string, React.FC> = {
  undefined: Overview,
  redundancy: RedundancyAnalysis,
  compliance: ComplianceMapping,
  roi: RoiCalculator,
  budget: BudgetOptimizer,
}

export default function Dashboard() {
  const { section } = useParams()
  const [collapsed, setCollapsed] = useState(false)

  const SectionComponent = sections[section ?? 'undefined'] || Overview

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">OptiSecure Dashboard</p>
            <p className="text-sm text-slate-500 mt-0.5">Acme Corp Security Portfolio · Demo Mode</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-xs font-medium text-emerald-600">
              Live Data
            </span>
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
              PL
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
