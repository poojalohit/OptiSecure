import { Link, useLocation } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function SiteNav() {
  const { pathname } = useLocation()
  const onWhitepaper = pathname === '/' || pathname === ''
  const onDemo = pathname.startsWith('/demo')

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-brand">
          <span className="site-nav-mark">
            <Shield className="w-3.5 h-3.5 text-white" />
          </span>
          <span className="site-nav-name">OptiSecure</span>
        </Link>

        <div className="site-nav-links">
          <Link
            to="/"
            className={`site-nav-link ${onWhitepaper ? 'is-active' : ''}`}
          >
            Whitepaper
          </Link>
          <Link
            to="/demo"
            className={`site-nav-link ${onDemo ? 'is-active' : ''}`}
          >
            Sample Dashboard
          </Link>
          {onWhitepaper && (
            <a href="#signup" className="site-nav-cta">
              Get early access
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
