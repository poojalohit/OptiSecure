export interface IndustryPreset {
  id: string
  name: string
  description: string
  cisoName: string
  companyName: string
  employeeRange: string
  securityBudget: string
  requiredFrameworks: string[]
  preloadedToolIds: string[]
}

export const industryPresets: IndustryPreset[] = [
  {
    id: 'finserv',
    name: 'Financial Services',
    description: 'Banks, insurance, and fintech firms under heavy regulatory pressure.',
    cisoName: 'Sarah Chen',
    companyName: 'Meridian Financial Group',
    employeeRange: '2,500–5,000',
    securityBudget: '$8M–$15M',
    requiredFrameworks: ['NIST', 'SOC 2', 'PCI DSS', 'ISO 27001'],
    preloadedToolIds: ['crowdstrike', 'splunk', 'okta', 'cyberark', 'tenable', 'proofpoint', 'zscaler', 'vault', 'wiz'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Hospital systems and health tech with strict HIPAA compliance needs.',
    cisoName: 'Dr. Marcus Williams',
    companyName: 'Pacific Health Systems',
    employeeRange: '3,000–8,000',
    securityBudget: '$5M–$12M',
    requiredFrameworks: ['NIST', 'HIPAA', 'SOC 2'],
    preloadedToolIds: ['crowdstrike', 'splunk', 'sentinel', 'okta', 'proofpoint', 'tenable', 'qualys', 'vault'],
  },
  {
    id: 'saas',
    name: 'SaaS / Technology',
    description: 'Cloud-first companies shipping software and managing customer data.',
    cisoName: 'Priya Patel',
    companyName: 'NovaBuild Inc.',
    employeeRange: '500–2,000',
    securityBudget: '$3M–$8M',
    requiredFrameworks: ['SOC 2', 'ISO 27001', 'NIST'],
    preloadedToolIds: ['crowdstrike', 'sentinel', 'okta', 'snyk', 'wiz', 'zscaler', 'vault'],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    description: 'Online retailers and POS-heavy chains processing card payments.',
    cisoName: 'James Torres',
    companyName: 'BrightCart Commerce',
    employeeRange: '1,000–4,000',
    securityBudget: '$4M–$10M',
    requiredFrameworks: ['PCI DSS', 'NIST', 'SOC 2'],
    preloadedToolIds: ['cortex-xdr', 'splunk', 'okta', 'cloudflare', 'tenable', 'proofpoint', 'veracode'],
  },
]
