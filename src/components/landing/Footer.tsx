import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/scroll'

const links = [
  { label: 'Problem', id: 'problems' },
  { label: 'Solution', id: 'solution' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Metrics', id: 'metrics' },
]

export default function Footer() {
  return (
    <>
      <section className="py-24 md:py-32 bg-slate-900">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready to Optimize Your Security Portfolio?
            </h2>
            <p className="text-base text-slate-400 mb-10">
              Join CISOs using data — not vendor narratives — to make smarter investments.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg no-underline hover:bg-slate-100 transition-colors text-sm"
              >
                Explore the Platform <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white font-medium rounded-lg no-underline transition-colors text-sm border border-slate-700"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-400">OptiSecure</span>
            </div>
            <div className="flex items-center gap-8">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors bg-transparent border-none cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-700">&copy; 2026 OptiSecure</p>
          </div>
        </div>
      </footer>
    </>
  )
}
