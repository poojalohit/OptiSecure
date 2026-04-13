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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-slate-900">OptiSecure</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none font-medium"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm text-slate-500 hover:text-slate-900 no-underline px-3 py-1.5 transition-colors">
              Sign In
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg no-underline transition-colors">
              View Demo
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600 bg-transparent border-none cursor-pointer">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { scrollToSection(l.id); setOpen(false) }}
              className="block w-full text-left text-sm text-slate-600 py-2.5 bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
            <Link to="/login" className="block text-sm text-slate-700 no-underline py-2">Sign In</Link>
            <Link to="/dashboard" className="block text-sm font-medium text-white bg-brand-600 text-center px-4 py-2.5 rounded-lg no-underline">View Demo</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
