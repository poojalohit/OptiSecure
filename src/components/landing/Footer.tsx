import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <section className="py-32 bg-slate-900 border-t border-slate-800">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 max-w-2xl mx-auto">
            Ready to Optimize Your Security Portfolio?
          </h2>
          <p className="text-base text-slate-400 mb-14 max-w-md mx-auto leading-relaxed">
            Join forward-thinking CISOs using data — not vendor narratives — to make smarter investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-slate-900 font-medium rounded-full no-underline hover:bg-slate-100 transition-colors text-[15px]"
            >
              Explore the Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 text-slate-400 hover:text-white font-medium rounded-full no-underline transition-colors text-[15px]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-400">OptiSecure</span>
            </div>
            <div className="flex items-center gap-10 text-[13px] text-slate-600">
              <a href="#problems" className="hover:text-slate-400 no-underline transition-colors">Problem</a>
              <a href="#solution" className="hover:text-slate-400 no-underline transition-colors">Solution</a>
              <a href="#pricing" className="hover:text-slate-400 no-underline transition-colors">Pricing</a>
              <a href="#metrics" className="hover:text-slate-400 no-underline transition-colors">Metrics</a>
            </div>
            <p className="text-[13px] text-slate-700">&copy; 2026 OptiSecure</p>
          </div>
        </div>
      </footer>
    </>
  )
}
