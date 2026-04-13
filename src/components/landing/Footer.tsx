import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <section className="py-24 bg-brand-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Optimize Your Security Portfolio?
          </h2>
          <p className="text-lg text-brand-200 mb-10 max-w-2xl mx-auto">
            Join forward-thinking CISOs who are using data — not vendor narratives — to make smarter security investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl no-underline hover:bg-brand-50 transition-colors text-lg shadow-xl"
            >
              Explore the Platform <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-400 text-brand-200 font-semibold rounded-xl no-underline hover:bg-brand-900 transition-colors text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">OptiSecure</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-400">
              <a href="#problems" className="hover:text-white no-underline transition-colors">Problem</a>
              <a href="#solution" className="hover:text-white no-underline transition-colors">Solution</a>
              <a href="#pricing" className="hover:text-white no-underline transition-colors">Pricing</a>
              <a href="#metrics" className="hover:text-white no-underline transition-colors">Metrics</a>
            </div>
            <p className="text-sm text-slate-500">&copy; 2026 OptiSecure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
