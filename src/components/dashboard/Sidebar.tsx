import { Link, useLocation } from 'react-router-dom'
import {
  Shield, LayoutDashboard, Layers, ShoppingCart,
  LogOut, ChevronLeft
} from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'My Stack', icon: Layers, path: '/dashboard/stack' },
  { label: 'Evaluate Tool', icon: ShoppingCart, path: '/dashboard/evaluate' },
]

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const location = useLocation()
  const { preset } = usePortfolio()

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-slate-900 text-white flex flex-col transition-all duration-300 z-40 ${collapsed ? 'w-16' : 'w-60'}`}>
      <div className="flex items-center gap-2.5 px-4 h-16 border-b border-slate-800">
        <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
          <Shield className="w-4 h-4 text-white" />
        </div>
        {!collapsed && <span className="text-[15px] font-semibold">OptiSecure</span>}
      </div>

      {!collapsed && preset && (
        <div className="px-4 py-3 border-b border-slate-800">
          <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">Account</p>
          <p className="text-sm font-medium text-slate-200 truncate">{preset.companyName}</p>
          <p className="text-xs text-slate-400 truncate">{preset.cisoName} · {preset.name}</p>
        </div>
      )}

      <nav className="flex-1 py-3 space-y-0.5 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm no-underline transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white font-medium'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="p-2 space-y-0.5 border-t border-slate-800">
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 w-full transition-colors cursor-pointer bg-transparent border-none"
        >
          <ChevronLeft className={`w-[18px] h-[18px] shrink-0 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          {!collapsed && <span>Collapse</span>}
        </button>
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 no-underline transition-colors"
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && <span>Exit</span>}
        </Link>
      </div>
    </aside>
  )
}
