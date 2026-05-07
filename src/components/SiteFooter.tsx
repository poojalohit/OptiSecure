import { Shield } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
            <Shield className="w-3 h-3 text-white" />
          </span>
          <span className="text-sm font-semibold text-slate-500">OptiSecure</span>
        </div>
        <p className="text-xs text-slate-400">
          NYU VIP Program &middot; Spring 2026 &middot; &copy; OptiSecure
        </p>
      </div>
    </footer>
  )
}
