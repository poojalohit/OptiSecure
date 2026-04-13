import { useNavigate } from 'react-router-dom'
import { Shield, Building2, Heart, Code, ShoppingCart, ArrowRight } from 'lucide-react'
import { usePortfolio } from '../context/PortfolioContext'
import { industryPresets } from '../data/industryPresets'

const icons: Record<string, typeof Building2> = { finserv: Building2, healthcare: Heart, saas: Code, retail: ShoppingCart }

export default function Onboarding() {
  const navigate = useNavigate()
  const { setPreset } = usePortfolio()

  function pick(id: string) {
    setPreset(id)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-[15px] font-semibold text-slate-900">OptiSecure</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium text-brand-600 tracking-wide uppercase mb-3">Getting started</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Select your industry
            </h1>
            <p className="text-base text-slate-500 max-w-lg mx-auto">
              We'll load a realistic CISO profile with pre-configured tools typical for your sector. You can add or remove tools afterward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {industryPresets.map((p) => {
              const Icon = icons[p.id] ?? Building2
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => pick(p.id)}
                  className="group text-left p-7 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-colors mt-1" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-400">
                    <span>{p.employeeRange} employees</span>
                    <span>{p.preloadedToolIds.length} tools pre-loaded</span>
                    <span>{p.requiredFrameworks.join(', ')}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
