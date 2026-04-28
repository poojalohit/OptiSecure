import { useState } from 'react'
import { Shield, ArrowRight, Check } from 'lucide-react'

export default function Whitepaper() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim() && email.trim()) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }} className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-900">OptiSecure</span>
          </div>
          <a href="#signup" className="text-xs font-medium text-brand-600 hover:text-brand-700 no-underline transition-colors">
            Get early access &darr;
          </a>
        </div>
      </nav>

      {/* Page body — vertical padding only; horizontal layout handled by .wp-columns */}
      <article className="pt-12 pb-16 lg:pt-20 lg:pb-20">

        {/* .wp-columns is the outermost wrapper containing both main content and sidebar */}
        <div className="wp-columns">

          {/* Header spans both columns */}
          <header className="wp-full-width text-center mb-12 lg:mb-16">
            <p className="text-[12px] font-semibold text-brand-600 tracking-[0.18em] uppercase mb-5">Whitepaper</p>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold text-slate-900 leading-[1.18] tracking-tight mb-5 max-w-2xl mx-auto">
              Are You Buying Security — or Just Buying More Tools?
            </h1>
            <p className="text-[15px] text-slate-400">A whitepaper by OptiSecure &nbsp;|&nbsp; Spring 2026</p>
          </header>

          {/* Main article column — grid controls its width */}
          <div className="wp-main">

            {/* --- Picture This --- */}
            <Section title="Picture This">
              <P>You're a VP of Security. Budget season is here. You're asked to justify $14 million in annual cybersecurity spend in front of your CFO and board.</P>
              <P>You have 40+ tools running across the organization. Your team is stretched thin managing them. And when the CFO asks which tools are essential, which overlap, and where you could cut without increasing risk — you don't have a clean answer.</P>
              <P>So you call your vendors. Each one hands you an ROI calculator that proves, unsurprisingly, that their tool is indispensable.</P>
              <P>You leave the meeting with the same budget, the same tools, and the same unanswered question.</P>
              <P><strong className="text-slate-900">This is not a failure of leadership. It's a failure of information.</strong></P>
            </Section>

            {/* --- Numbers --- */}
            <Section title="The Numbers Behind the Problem">
              <P>The cybersecurity market is projected to reach $520 billion by 2026. Organizations are not underinvesting in security. The problem is something else entirely.</P>

              {/* .wp-stats: display:grid; grid-template-columns:1fr 1fr; gap:16px */}
              <div className="wp-stats">
                <StatBlock value="40+" label="Security tools run by the average large enterprise" />
                <StatBlock value="44%" label="Can't reliably detect breaches — despite all that spending" />
                <StatBlock value="76%" label="Say identifying the right solutions has gotten more complex" />
                <StatBlock value="$1M–$10M+" label="Burned annually on tools with unclear or unmeasured ROI" />
              </div>

              <P><strong className="text-slate-900">More spending is not translating into more clarity — or more confidence.</strong></P>
            </Section>

            {/* --- How Did We Get Here --- */}
            <Section title="How Did We Get Here?">
              <P>Security portfolios rarely get built by design. They get built by reaction.</P>
              <P>A breach happens — a tool gets purchased. An auditor flags a gap — another tool gets added. A vendor makes a compelling pitch at a conference — the contract gets signed. Repeat this over five years and you end up with a sprawling stack of tools that nobody has ever evaluated together, as a portfolio.</P>
              <P>The result: controls that overlap, budgets that bloat, and a CISO who can't explain to the board what they're actually getting.</P>
              <P>This isn't a small-company problem. <a href="https://www.stationx.net/cybersecurity-statistics/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline decoration-brand-200 hover:decoration-brand-400 transition-colors">144 AI security deals closed in 2025 alone</a>, making it the most active cybersecurity investment category. The market is adding new tools faster than any team can evaluate them — which means the portfolio problem gets worse every year, not better.</P>
            </Section>

            {/* --- ROI Calculators --- */}
            <Section title="The Dirty Secret of ROI Calculators">
              <P>When security leaders try to measure whether their tools are delivering value, the most obvious place to turn is an ROI calculator. Every major vendor offers one — for free, on their website.</P>
              <P>Here's the problem: <strong className="text-slate-900">every vendor-built ROI calculator is designed to justify that vendor's product.</strong></P>
              <P>Cisco's calculator shows you how much Cisco is worth. Palo Alto's does the same for Palo Alto. None of them account for the five other tools you already own that do similar things. None of them tell you what the marginal value of adding their tool actually is — on top of everything else you're running.</P>
              <P>This isn't a conspiracy. It's simply what incentives produce. Organizations that quantify risk in financial terms make better investment decisions and communicate security value in language that resonates with executives — but the key is adopting <a href="https://www.safe.security/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline decoration-brand-200 hover:decoration-brand-400 transition-colors">structured frameworks with a defensible methodology</a>, not optimistic vendor claims.</P>
              <P>The frameworks exist. The independent rigor, applied to a live enterprise portfolio? That's what's missing.</P>
            </Section>

            {/* --- Real Cost --- */}
            <Section title="The Real Cost of Not Knowing">
              <P>When portfolio decisions are driven by vendor marketing instead of data, the waste is significant — but it's invisible. Nobody sends you an invoice for redundant coverage. Nobody flags the alert that fired in two tools simultaneously. The money just quietly disappears into license renewals.</P>
              <P>And the risk side is just as problematic. <a href="https://www.auxis.com/blog/cybersecurity-statistics/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline decoration-brand-200 hover:decoration-brand-400 transition-colors">The average cost of a data breach in the US has surged to a record $10.22 million.</a> When budgets are misallocated — spent on redundant tools instead of genuine coverage gaps — organizations are paying twice: once for tools they don't need, and again when an unaddressed vulnerability is exploited.</P>
              <P><strong className="text-slate-900">The stakes are high. The decisions are being made blind.</strong></P>
            </Section>

            {/* --- Getting Harder --- */}
            <Section title="Why This Is Getting Harder, Not Easier">
              <P>Three forces are making the portfolio problem more acute in 2026 than ever before:</P>

              <div className="my-8 space-y-6">
                <ForceBlock
                  title="Boards are scrutinizing security budgets like never before."
                  body="As cybersecurity spending has grown into the tens of millions, CFOs and audit committees want the same rigor applied to security spend that they apply to any other major cost center. A narrative is no longer enough. Data is required."
                />
                <ForceBlock
                  title="Compliance pressure is intensifying."
                  body="Between NIST updates, SOC 2 requirements, ISO 27001, and the EU AI Act coming into full effect in August 2026, organizations face an increasingly complex web of frameworks. Navigating them without clear visibility into what your tools actually cover — and where they overlap — is both expensive and risky."
                />
                <ForceBlock
                  title="The tool market keeps expanding."
                  body={<>AI-enhanced security platforms now command <a href="https://www.stationx.net/cybersecurity-statistics/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline decoration-brand-200 hover:decoration-brand-400 transition-colors">31% of cybersecurity budgets</a>, and new product categories are emerging every quarter. More choice means more complexity — and more opportunity to buy the wrong thing, or the right thing twice.</>}
                />
              </div>
            </Section>

            {/* --- The Gap --- */}
            <Section title="The Gap No One Has Filled">
              <P>There are tools that tell you what assets you have. There are frameworks that tell you what risks exist. There are vendors that tell you their product is worth it.</P>
              <P>What doesn't exist — yet — is a neutral, AI-native system that looks at your entire portfolio and tells you: <strong className="text-slate-900">what's working, what's redundant, and where your next dollar should actually go.</strong></P>
              <P>That gap is costing enterprises real money. And it's the problem worth solving.</P>
            </Section>

            {/* --- Divider --- */}
            <div className="my-12 lg:my-16 border-t border-slate-200" />

            {/* --- CTA / Sign-up --- */}
            <section id="signup" className="scroll-mt-28">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 text-center shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                  We're working on it.
                </h2>
                <p className="text-base text-slate-500 mb-8 max-w-md mx-auto">
                  Stay tuned. Sign up to be the first to know when OptiSecure launches.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 max-w-xl mx-auto">
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full min-w-0 px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full min-w-0 px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-sm cursor-pointer border-none"
                    >
                      Sign up
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-slate-900 font-medium">You're on the list, {name.split(' ')[0]}.</p>
                    <p className="text-sm text-slate-400">We'll be in touch soon.</p>
                  </div>
                )}
              </div>
            </section>

          </div>{/* end .wp-main */}

          {/* Sidebar — .wp-sidebar: sticky; top:100px; hidden below 900px via media query */}
          <aside className="wp-sidebar">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-5">In this paper</p>
              <ol className="space-y-3 text-sm text-slate-600">
                <li>1. Budget pressure</li>
                <li>2. Why tool sprawl happens</li>
                <li>3. Why vendor ROI falls short</li>
                <li>4. The real cost of uncertainty</li>
                <li>5. The portfolio intelligence gap</li>
              </ol>
              <a href="#signup" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white no-underline hover:bg-slate-800 transition-colors">
                Get early access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </aside>

        </div>{/* end .wp-columns */}
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-400">OptiSecure</span>
          </div>
          <p className="text-xs text-slate-400">&copy; 2026 OptiSecure</p>
        </div>
      </footer>
    </div>
  )
}

/* ── Sub-components ─────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12 lg:mb-14">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-6 pb-3 border-b border-slate-100">{title}</h2>
      {children}
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] lg:text-[17px] text-slate-600 leading-[1.85] mb-5 last:mb-0">{children}</p>
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="wp-stat-card">
      <p className="text-2xl sm:text-3xl font-semibold text-slate-900 tabular-nums tracking-tight mb-2">{value}</p>
      <p className="text-sm text-slate-500 leading-6">{label}</p>
    </div>
  )
}

function ForceBlock({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="pl-5 py-1 border-l-2 border-brand-200">
      <p className="text-[16px] lg:text-[17px] text-slate-900 font-semibold mb-2">{title}</p>
      <p className="text-[16px] lg:text-[17px] text-slate-600 leading-[1.85]">{body}</p>
    </div>
  )
}
