import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <section className="py-28 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
            Ready to Optimize Your Security Portfolio?
          </h2>
          <p className="text-base text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Join forward-thinking CISOs who are using data — not vendor narratives — to make smarter security investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-slate-900 font-semibold rounded-xl no-underline hover:bg-slate-100 transition-colors text-[15px]"
            >
              Explore the Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-xl no-underline hover:bg-slate-800 transition-colors text-[15px]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-bold text-white">OptiSecure</span>
            </div>
            <div className="flex items-center gap-8 text-xs text-slate-500">
              <a href="#problems" className="hover:text-slate-300 no-underline transition-colors">Problem</a>
              <a href="#solution" className="hover:text-slate-300 no-underline transition-colors">Solution</a>
              <a href="#pricing" className="hover:text-slate-300 no-underline transition-colors">Pricing</a>
              <a href="#metrics" className="hover:text-slate-300 no-underline transition-colors">Metrics</a>
            </div>
            <p className="text-xs text-slate-600">&copy; 2026 OptiSecure</p>
          </div>
        </div>
      </footer>
    </>
  )
}
