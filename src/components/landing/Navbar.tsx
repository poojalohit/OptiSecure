import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">OptiSecure</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <a href="#problems" className="text-[13px] font-medium text-slate-500 hover:text-slate-900 no-underline transition-colors tracking-wide uppercase">Problem</a>
            <a href="#solution" className="text-[13px] font-medium text-slate-500 hover:text-slate-900 no-underline transition-colors tracking-wide uppercase">Solution</a>
            <a href="#pricing" className="text-[13px] font-medium text-slate-500 hover:text-slate-900 no-underline transition-colors tracking-wide uppercase">Pricing</a>
            <a href="#metrics" className="text-[13px] font-medium text-slate-500 hover:text-slate-900 no-underline transition-colors tracking-wide uppercase">Results</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-500 hover:text-slate-900 no-underline px-4 py-2 transition-colors">
              Sign In
            </Link>
            <Link to="/dashboard" className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-5 py-2.5 rounded-lg no-underline transition-colors">
              View Demo
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-600">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 space-y-1">
          <a href="#problems" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-600 no-underline py-2.5">Problem</a>
          <a href="#solution" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-600 no-underline py-2.5">Solution</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-600 no-underline py-2.5">Pricing</a>
          <a href="#metrics" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-600 no-underline py-2.5">Results</a>
          <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
            <Link to="/login" className="block text-sm font-medium text-slate-700 no-underline py-2">Sign In</Link>
            <Link to="/dashboard" className="block text-sm font-semibold text-white bg-brand-600 text-center px-4 py-2.5 rounded-lg no-underline">View Demo</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
