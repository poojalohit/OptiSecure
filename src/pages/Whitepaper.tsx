import { useState } from 'react'
import { ArrowRight, Check, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'

export default function Whitepaper() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim() && email.trim()) setSubmitted(true)
  }

  return (
    <div>
      <SiteNav />

      <article className="pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="wp-columns">
          {/* Main article column (header now lives inside it so it left-aligns with body) */}
          <div className="wp-main">
            <header className="wp-header">
              <p className="wp-header-eyebrow">
                Whitepaper &middot; Spring 2026
              </p>
              <h1 className="wp-header-title">
                Are You Buying Security or Just Buying More Tools?
              </h1>
              <p className="wp-header-subtitle">
                How big companies end up with dozens of overlapping security tools,
                why they cannot tell which ones are working, and what a smarter
                approach would look like.
              </p>
              <div className="wp-header-actions">
                <a href="#signup" className="site-nav-cta" style={{ marginLeft: 0 }}>
                  Get early access
                </a>
                <Link
                  to="/demo"
                  className="site-nav-link"
                  style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    padding: '7px 14px',
                    fontSize: 13,
                  }}
                >
                  <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
                  See the sample dashboard
                </Link>
              </div>
            </header>

            <Section title="Picture this">
              <P>
                You run cybersecurity at a large company. Budget season is here,
                and you have been asked to justify $14 million in annual security
                spending in front of your CFO and board.
              </P>
              <P>
                You have more than 40 different security tools running across the
                company. Your team is stretched thin managing them. When the CFO
                asks which tools are essential, which ones overlap, and where you
                could cut without making the company less safe, you do not have a
                clean answer.
              </P>
              <P>
                So you call your vendors. Each one hands you a calculator that,
                unsurprisingly, proves that their own product is indispensable.
              </P>
              <P>
                You leave the meeting with the same budget, the same tools, and
                the same unanswered question.
              </P>
            </Section>

            <Section title="The numbers behind the problem">
              <P>
                The global cybersecurity market is projected to reach $520 billion
                by 2026. Companies are not spending too little on security. The
                problem is something else entirely.
              </P>

              <div className="wp-stats">
                <StatBlock value="40+" label="Security tools running at the average large enterprise" />
                <StatBlock value="44%" label="Of large companies still cannot reliably detect breaches" />
                <StatBlock value="76%" label="Say picking the right security tools has gotten harder, not easier" />
                <StatBlock value="$1M to $10M+" label="Spent every year on tools whose value is unclear or unmeasured" />
              </div>

              <P>
                <strong>
                  More spending is not translating into more clarity, or more
                  confidence.
                </strong>
              </P>
            </Section>

            <Section title="How did we get here?">
              <P>
                Security tool stacks are rarely built by design. They grow by
                reaction.
              </P>
              <P>
                A breach happens, so a tool gets purchased. An auditor flags a
                gap, so another tool gets added. A vendor makes a compelling
                pitch at a conference, so a contract gets signed. Repeat this
                over five years and you end up with a sprawling stack of tools
                that nobody has ever evaluated together, as a whole.
              </P>
              <P>
                The result: overlapping protections, bloated budgets, and a
                security leader who cannot clearly explain to the board what the
                organization is actually getting for its money.
              </P>
              <P>
                This is not just a small-company problem.{' '}
                <a
                  href="https://www.stationx.net/cybersecurity-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  144 cybersecurity AI deals closed in 2025 alone
                </a>
                , making it the most active investment category in the industry.
                The market is adding new tools faster than any team can evaluate
                them, which means the problem gets worse every year, not better.
              </P>
            </Section>

            <Section title="The problem with vendor calculators">
              <P>
                When security leaders try to measure whether their tools are
                actually delivering value, the most obvious place to turn is a
                vendor ROI calculator. Almost every major vendor offers one for
                free on their website. (ROI just means "return on investment", a
                way of estimating what you get back for what you spend.)
              </P>
              <P>
                Here is the catch:{' '}
                <strong>
                  every vendor-built calculator is designed to justify that
                  vendor's product.
                </strong>
              </P>
              <P>
                Cisco's calculator tells you Cisco is worth it. Palo Alto's
                tells you the same about Palo Alto. None of them account for
                the other tools you already own that do similar things. None of
                them show you the real value of adding their tool on top of
                everything else you are already running.
              </P>
              <P>
                This is not a conspiracy. It is simply what incentives produce.
                The frameworks for objective risk measurement already exist.
                What is missing is independent, rigorous analysis applied to a
                real, live portfolio.
              </P>
            </Section>

            <Section title="The real cost of not knowing">
              <P>
                When budget decisions are driven by vendor marketing instead of
                data, the waste is real but invisible. Nobody sends you an
                invoice for redundant coverage. Nobody flags it when the same
                alert fires in two different tools at the same time. The money
                quietly disappears into annual license renewals.
              </P>
              <P>
                The risk side is just as serious.{' '}
                <a
                  href="https://www.auxis.com/blog/cybersecurity-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The average cost of a data breach in the United States has
                  reached $10.22 million.
                </a>{' '}
                When budgets are misallocated, spent on tools that duplicate
                each other rather than filling real gaps, organizations end up
                paying twice: once for tools they do not need, and again when a
                gap that nobody noticed gets exploited.
              </P>
              <P>The stakes are high. The decisions are being made blind.</P>
            </Section>

            <Section title="Why this is getting harder, not easier">
              <P>
                Three things are making this problem more urgent in 2026:
              </P>

              <ForceBlock
                title="Boards want answers, not narratives."
                body={
                  <>
                    As security budgets have grown into the tens of millions,
                    CFOs and audit committees want the same rigor applied to
                    security spending that they apply to any other major
                    business cost. Saying &ldquo;we are protected&rdquo; is no
                    longer enough. Showing the data is now expected.
                  </>
                }
              />
              <ForceBlock
                title="Compliance is getting more complex."
                body={
                  <>
                    Companies have to follow a growing list of cybersecurity
                    standards. These are sets of rules that say what controls
                    must be in place to handle data safely. Examples include
                    NIST (the United States government cybersecurity standard),
                    ISO 27001 and SOC 2 (international and audit-driven
                    standards), and the new EU AI Act, which takes full effect
                    in August 2026. Without clear visibility into what your
                    tools cover and where they overlap, staying compliant is
                    both expensive and risky.
                  </>
                }
              />
              <ForceBlock
                title="The market keeps adding more tools."
                body={
                  <>
                    AI-powered security platforms now account for{' '}
                    <a
                      href="https://www.stationx.net/cybersecurity-statistics/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      31% of cybersecurity budgets
                    </a>
                    , and new product categories are launching every quarter.
                    More choice means more complexity, and more opportunity to
                    buy the wrong thing, or the right thing twice.
                  </>
                }
              />
            </Section>

            <Section title="The gap no one has filled">
              <P>
                There are tools that tell you what assets you own. There are
                frameworks that tell you what risks exist. There are vendors
                that tell you their product is worth the money.
              </P>
              <P>
                What does not exist yet is a neutral system that looks at your
                entire security stack and tells you, in one place: what is
                working, what is redundant, and where your next dollar should
                actually go.
              </P>
              <P>
                That is the gap OptiSecure is built to close. It analyzes the
                security tools a company already owns, finds where they overlap
                or leave gaps, and recommends how to spend the next dollar for
                the most actual risk reduction.
              </P>
              <div className="wp-callout">
                Curious what that looks like in practice?{' '}
                <Link to="/demo">
                  See the sample dashboard for a fictional customer.
                </Link>
              </div>
            </Section>

            {/* CTA / Sign-up */}
            <section id="signup" className="scroll-mt-28">
              <div className="wp-cta">
                <h2>We are working on it.</h2>
                <p className="wp-cta-subtitle">
                  OptiSecure is in active development. Sign up to be the first
                  to know when it launches and to receive product updates.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="wp-cta-form">
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="wp-cta-input"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="wp-cta-input"
                    />
                    <button type="submit" className="wp-cta-btn">
                      Sign up
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-slate-900 font-medium">
                      You are on the list, {name.split(' ')[0]}.
                    </p>
                    <p className="text-sm text-slate-400">We will be in touch soon.</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="wp-sidebar">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                In this paper
              </p>
              <ol className="space-y-2.5 text-[13px] text-slate-600">
                <li>1. Picture this</li>
                <li>2. The numbers behind the problem</li>
                <li>3. How did we get here?</li>
                <li>4. The problem with vendor calculators</li>
                <li>5. The real cost of not knowing</li>
                <li>6. Why this is getting harder</li>
                <li>7. The gap no one has filled</li>
              </ol>

              <div className="mt-5 pt-5 border-t border-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                  See it in action
                </p>
                <Link
                  to="/demo"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white border border-slate-200 px-3 py-2 text-[13px] font-medium text-slate-900 no-underline hover:bg-slate-100 transition-colors"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  Sample dashboard
                </Link>
                <a
                  href="#signup"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-[13px] font-medium text-white no-underline hover:bg-slate-800 transition-colors"
                >
                  Get early access
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <SiteFooter />
    </div>
  )
}

/* ── Sub-components ─────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="wp-stat-card">
      <p className="wp-stat-value">{value}</p>
      <p className="wp-stat-label">{label}</p>
    </div>
  )
}

function ForceBlock({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div>
      <p className="wp-force-title">{title}</p>
      <p>{body}</p>
    </div>
  )
}
