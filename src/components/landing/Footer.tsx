import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const links = [
  { label: 'Problem', id: 'problems' },
  { label: 'Solution', id: 'solution' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Results', id: 'metrics' },
]

export default function Footer() {
  return (
    <>
      <section className="section-pad bg-slate-900">
        <div className="page-shell">
          <div className="max-w-[36rem] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight mb-4">
              See your portfolio in one place
            </h2>
            <p className="text-[17px] text-slate-400 leading-relaxed mb-10">
              Open the interactive demo—no signup required to explore the flows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-900 font-medium rounded-lg no-underline hover:bg-slate-100 transition-colors text-[15px]"
              >
                Open demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-slate-300 hover:text-white font-medium rounded-lg no-underline transition-colors text-[15px] border border-slate-600"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10">
        <div className="page-shell">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[15px] font-semibold text-slate-300">OptiSecure</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-8">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToSection(l.id)}
                  className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors bg-transparent border-none cursor-pointer font-medium"
                >
                  {l.label}
                </button>
              ))}
            </nav>
            <p className="text-[13px] text-slate-600">&copy; 2026 OptiSecure</p>
          </div>
        </div>
      </footer>
    </>
  )
}
