import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const links = [
  { label: 'Problem', id: 'problems' },
  { label: 'Solution', id: 'solution' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Results', id: 'metrics' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="page-shell">
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center h-[68px]">
          <Link to="/" className="flex items-center gap-2.5 no-underline justify-self-start">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-semibold text-slate-900 tracking-tight">OptiSecure</span>
          </Link>

          <div className="flex items-center justify-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollToSection(l.id)}
                className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none font-medium"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link to="/login" className="text-[13px] text-slate-500 hover:text-slate-900 no-underline px-3 py-2 transition-colors font-medium">
              Sign in
            </Link>
            <Link to="/dashboard" className="text-[13px] font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg no-underline transition-colors">
              View demo
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-semibold text-slate-900">OptiSecure</span>
          </Link>
          <button type="button" onClick={() => setOpen(!open)} className="p-2 text-slate-600 bg-transparent border-none cursor-pointer">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 page-shell py-4 space-y-0.5">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => { scrollToSection(l.id); setOpen(false) }}
              className="block w-full text-left text-[15px] text-slate-600 py-3 bg-transparent border-none cursor-pointer font-medium"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
            <Link to="/login" className="block text-[15px] text-slate-700 no-underline py-2">Sign in</Link>
            <Link to="/dashboard" className="block text-[15px] font-medium text-white bg-slate-900 text-center px-4 py-3 rounded-lg no-underline">View demo</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
