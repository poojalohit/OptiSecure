/* Mock data for the OptiSecure sample dashboard. */

export const customer = {
  name: 'Northwind Financial Services',
  industry: 'Banking & Financial Services',
  employees: '8,400',
  region: 'US, with operations in EU & UK',
  annualBudget: 14_200_000,
  toolsTracked: 42,
}

export type ToolStatus = 'Keep' | 'Review' | 'Cut'

export interface Tool {
  name: string
  vendor: string
  category: string
  annualCost: number
  riskReduction: number /* 0–100 */
  status: ToolStatus
}

export const tools: Tool[] = [
  { name: 'Splunk Enterprise Security', vendor: 'Splunk', category: 'Log Analytics & SIEM', annualCost: 2_400_000, riskReduction: 81, status: 'Keep' },
  { name: 'Prisma Cloud', vendor: 'Palo Alto Networks', category: 'Cloud Security', annualCost: 2_100_000, riskReduction: 88, status: 'Keep' },
  { name: 'Okta Workforce Identity', vendor: 'Okta', category: 'Identity & Access', annualCost: 1_450_000, riskReduction: 87, status: 'Keep' },
  { name: 'CrowdStrike Falcon', vendor: 'CrowdStrike', category: 'Endpoint Security', annualCost: 1_250_000, riskReduction: 92, status: 'Keep' },
  { name: 'Zscaler Internet Access', vendor: 'Zscaler', category: 'Network Security', annualCost: 1_180_000, riskReduction: 86, status: 'Keep' },
  { name: 'Wiz', vendor: 'Wiz', category: 'Cloud Security', annualCost: 980_000, riskReduction: 84, status: 'Keep' },
  { name: 'Defender for Endpoint', vendor: 'Microsoft', category: 'Endpoint Security', annualCost: 720_000, riskReduction: 78, status: 'Review' },
  { name: 'Sumo Logic', vendor: 'Sumo Logic', category: 'Log Analytics & SIEM', annualCost: 640_000, riskReduction: 58, status: 'Cut' },
  { name: 'Entra ID Premium P2', vendor: 'Microsoft', category: 'Identity & Access', annualCost: 620_000, riskReduction: 71, status: 'Review' },
  { name: 'Proofpoint Email Protection', vendor: 'Proofpoint', category: 'Email Security', annualCost: 560_000, riskReduction: 79, status: 'Keep' },
  { name: 'Carbon Black EDR', vendor: 'VMware', category: 'Endpoint Security', annualCost: 480_000, riskReduction: 65, status: 'Cut' },
  { name: 'Tenable Vulnerability Management', vendor: 'Tenable', category: 'Vulnerability Management', annualCost: 480_000, riskReduction: 76, status: 'Keep' },
]

/* Annual spend totals across all 42 tools, grouped by category. */
export const spendByCategory: { category: string; spend: number }[] = [
  { category: 'Cloud Security', spend: 3_080_000 },
  { category: 'Log Analytics & SIEM', spend: 3_040_000 },
  { category: 'Endpoint Security', spend: 2_450_000 },
  { category: 'Identity & Access', spend: 2_070_000 },
  { category: 'Network Security', spend: 1_590_000 },
  { category: 'Email Security', spend: 870_000 },
  { category: 'Vulnerability Management', spend: 620_000 },
  { category: 'Other', spend: 480_000 },
]

export interface Redundancy {
  pair: string
  capability: string
  overlap: number /* 0–1 */
  potentialSaving: number
}

export const redundancies: Redundancy[] = [
  {
    pair: 'CrowdStrike Falcon + Defender for Endpoint + Carbon Black EDR',
    capability: 'Endpoint detection and response (the same job, three times)',
    overlap: 0.84,
    potentialSaving: 1_200_000,
  },
  {
    pair: 'Splunk Enterprise Security + Sumo Logic',
    capability: 'Log collection and threat analytics',
    overlap: 0.78,
    potentialSaving: 640_000,
  },
  {
    pair: 'Okta + Entra ID Premium P2',
    capability: 'Single sign-on and multi-factor authentication',
    overlap: 0.71,
    potentialSaving: 420_000,
  },
  {
    pair: 'Proofpoint + Mimecast (in extended stack)',
    capability: 'Inbound email filtering and phishing protection',
    overlap: 0.69,
    potentialSaving: 310_000,
  },
  {
    pair: 'Prisma Cloud + Wiz',
    capability: 'Cloud security posture management',
    overlap: 0.42,
    potentialSaving: 0,
  },
]

export interface ComplianceFramework {
  name: string
  shortLabel: string
  what: string /* one-line plain-English explanation */
  coverage: number /* 0–100 */
  status: 'good' | 'partial' | 'gap'
}

export const compliance: ComplianceFramework[] = [
  {
    name: 'NIST CSF 2.0',
    shortLabel: 'NIST',
    what: 'US government cybersecurity framework',
    coverage: 89,
    status: 'good',
  },
  {
    name: 'ISO 27001',
    shortLabel: 'ISO',
    what: 'International information security standard',
    coverage: 94,
    status: 'good',
  },
  {
    name: 'SOC 2 Type II',
    shortLabel: 'SOC 2',
    what: 'Audit standard for SaaS and service providers',
    coverage: 96,
    status: 'good',
  },
  {
    name: 'PCI DSS 4.0',
    shortLabel: 'PCI',
    what: 'Required to handle credit card data',
    coverage: 78,
    status: 'partial',
  },
  {
    name: 'NYDFS Cybersecurity Reg',
    shortLabel: 'NYDFS',
    what: 'New York State financial services rule',
    coverage: 64,
    status: 'gap',
  },
  {
    name: 'GLBA Safeguards',
    shortLabel: 'GLBA',
    what: 'US rule for protecting consumer financial data',
    coverage: 91,
    status: 'good',
  },
]

export type RecommendationKind = 'consolidate' | 'reallocate' | 'gap'

export interface Recommendation {
  kind: RecommendationKind
  title: string
  body: string
  savingsLabel?: string /* free-form */
}

export const recommendations: Recommendation[] = [
  {
    kind: 'consolidate',
    title: 'Retire Carbon Black, consolidate on CrowdStrike',
    body:
      'You are running three different tools that all do endpoint detection. Carbon Black has the lowest risk-reduction score and the most overlap with Falcon and Defender. Cancelling its renewal and routing those endpoints through Falcon eliminates the duplication with no measurable loss in coverage.',
    savingsLabel: 'Saves $480K / year',
  },
  {
    kind: 'consolidate',
    title: 'Move all log analytics to Splunk',
    body:
      'Sumo Logic is collecting the same log sources as Splunk Enterprise Security and producing duplicate alerts. Migrating its data sources into Splunk eliminates one product, simplifies on-call, and removes 78% of the duplicate alerts.',
    savingsLabel: 'Saves $640K / year',
  },
  {
    kind: 'reallocate',
    title: 'Reinvest savings into PCI DSS 4.0 controls',
    body:
      'PCI DSS 4.0 (the new credit-card data standard) introduces customized validation requirements that your current tools only partially cover. Redirect $400K of the savings above into a cloud workload protection upgrade to close the gap before the March 2026 audit.',
    savingsLabel: 'Closes a 22% compliance gap',
  },
  {
    kind: 'consolidate',
    title: 'Consolidate identity on Okta',
    body:
      'Okta and Entra ID Premium P2 both provide single sign-on and multi-factor authentication for the workforce. Consolidating identity flows in Okta and downgrading Entra to the included Microsoft 365 tier eliminates duplicate licensing.',
    savingsLabel: 'Saves $420K / year',
  },
  {
    kind: 'gap',
    title: 'Stand up an annual penetration testing program',
    body:
      'NYDFS Part 500 (the New York State financial services rule) requires evidence of annual penetration testing and risk assessment that your current stack does not produce. A retained external testing engagement plus internal validation playbooks closes this requirement.',
    savingsLabel: 'New investment: $180K / year',
  },
]

export const summary = {
  totalIdentifiedSavings: 1_540_000,
  netReinvestment: 580_000,
  netBudgetReduction: 960_000,
  riskReductionImprovement: 5,
}
