export interface SecurityTool {
  id: string
  name: string
  vendor: string
  category: string
  annualCost: number
  riskReduction: number
  complianceFrameworks: string[]
  capabilities: string[]
  redundancyScore: number
  utilizationRate: number
  contractEnd: string
  status: 'active' | 'underperforming' | 'redundant'
}

export interface ComplianceFramework {
  name: string
  shortName: string
  totalControls: number
  coveredControls: number
  gapControls: number
  overCovered: number
}

export interface RedundancyPair {
  toolA: string
  toolB: string
  overlapPercent: number
  sharedCapabilities: string[]
  potentialSavings: number
}

export const securityTools: SecurityTool[] = [
  {
    id: '1', name: 'CrowdStrike Falcon', vendor: 'CrowdStrike', category: 'Endpoint Detection & Response',
    annualCost: 180000, riskReduction: 18.5, complianceFrameworks: ['NIST', 'SOC 2', 'ISO 27001'],
    capabilities: ['EDR', 'Threat Intelligence', 'Malware Prevention', 'Device Control'],
    redundancyScore: 12, utilizationRate: 89, contractEnd: '2026-11-15', status: 'active'
  },
  {
    id: '2', name: 'Palo Alto Cortex XDR', vendor: 'Palo Alto', category: 'Extended Detection & Response',
    annualCost: 145000, riskReduction: 15.2, complianceFrameworks: ['NIST', 'SOC 2'],
    capabilities: ['XDR', 'EDR', 'Network Detection', 'Threat Intelligence'],
    redundancyScore: 45, utilizationRate: 62, contractEnd: '2026-08-20', status: 'underperforming'
  },
  {
    id: '3', name: 'Splunk Enterprise Security', vendor: 'Splunk', category: 'SIEM',
    annualCost: 220000, riskReduction: 14.8, complianceFrameworks: ['NIST', 'SOC 2', 'ISO 27001', 'HIPAA'],
    capabilities: ['SIEM', 'Log Management', 'Threat Detection', 'Incident Response'],
    redundancyScore: 8, utilizationRate: 78, contractEnd: '2027-03-01', status: 'active'
  },
  {
    id: '4', name: 'Microsoft Sentinel', vendor: 'Microsoft', category: 'Cloud SIEM',
    annualCost: 95000, riskReduction: 11.3, complianceFrameworks: ['NIST', 'SOC 2', 'ISO 27001'],
    capabilities: ['SIEM', 'SOAR', 'Cloud Detection', 'Automated Response'],
    redundancyScore: 52, utilizationRate: 45, contractEnd: '2026-12-31', status: 'redundant'
  },
  {
    id: '5', name: 'Okta Identity Cloud', vendor: 'Okta', category: 'Identity & Access Management',
    annualCost: 120000, riskReduction: 16.7, complianceFrameworks: ['NIST', 'SOC 2', 'ISO 27001'],
    capabilities: ['SSO', 'MFA', 'Lifecycle Management', 'API Access Management'],
    redundancyScore: 5, utilizationRate: 94, contractEnd: '2027-06-15', status: 'active'
  },
  {
    id: '6', name: 'Zscaler Internet Access', vendor: 'Zscaler', category: 'Secure Web Gateway',
    annualCost: 85000, riskReduction: 9.4, complianceFrameworks: ['NIST', 'SOC 2'],
    capabilities: ['SWG', 'URL Filtering', 'Cloud Firewall', 'DLP'],
    redundancyScore: 18, utilizationRate: 82, contractEnd: '2026-09-30', status: 'active'
  },
  {
    id: '7', name: 'Tenable.io', vendor: 'Tenable', category: 'Vulnerability Management',
    annualCost: 68000, riskReduction: 8.1, complianceFrameworks: ['NIST', 'PCI DSS'],
    capabilities: ['Vulnerability Scanning', 'Risk Assessment', 'Compliance Auditing', 'Web App Scanning'],
    redundancyScore: 32, utilizationRate: 71, contractEnd: '2026-07-15', status: 'active'
  },
  {
    id: '8', name: 'Qualys VMDR', vendor: 'Qualys', category: 'Vulnerability Management',
    annualCost: 55000, riskReduction: 7.2, complianceFrameworks: ['NIST', 'PCI DSS', 'ISO 27001'],
    capabilities: ['Vulnerability Scanning', 'Patch Management', 'Asset Inventory', 'Compliance Monitoring'],
    redundancyScore: 38, utilizationRate: 58, contractEnd: '2026-10-01', status: 'underperforming'
  },
  {
    id: '9', name: 'Proofpoint Email Security', vendor: 'Proofpoint', category: 'Email Security',
    annualCost: 72000, riskReduction: 12.3, complianceFrameworks: ['NIST', 'SOC 2'],
    capabilities: ['Email Filtering', 'Phishing Protection', 'DLP', 'Email Encryption'],
    redundancyScore: 10, utilizationRate: 91, contractEnd: '2027-01-15', status: 'active'
  },
  {
    id: '10', name: 'Snyk', vendor: 'Snyk', category: 'Application Security',
    annualCost: 45000, riskReduction: 6.8, complianceFrameworks: ['SOC 2'],
    capabilities: ['SCA', 'SAST', 'Container Security', 'IaC Security'],
    redundancyScore: 15, utilizationRate: 76, contractEnd: '2026-11-30', status: 'active'
  },
  {
    id: '11', name: 'Wiz', vendor: 'Wiz', category: 'Cloud Security',
    annualCost: 110000, riskReduction: 13.1, complianceFrameworks: ['NIST', 'SOC 2', 'ISO 27001', 'CIS'],
    capabilities: ['CSPM', 'CWPP', 'CIEM', 'Vulnerability Management'],
    redundancyScore: 22, utilizationRate: 84, contractEnd: '2027-04-01', status: 'active'
  },
  {
    id: '12', name: 'HashiCorp Vault', vendor: 'HashiCorp', category: 'Secrets Management',
    annualCost: 38000, riskReduction: 5.9, complianceFrameworks: ['NIST', 'SOC 2', 'PCI DSS'],
    capabilities: ['Secrets Management', 'Encryption', 'PKI', 'Dynamic Credentials'],
    redundancyScore: 3, utilizationRate: 88, contractEnd: '2026-12-15', status: 'active'
  },
]

export const complianceFrameworks: ComplianceFramework[] = [
  { name: 'NIST Cybersecurity Framework', shortName: 'NIST CSF', totalControls: 108, coveredControls: 89, gapControls: 19, overCovered: 34 },
  { name: 'ISO 27001:2022', shortName: 'ISO 27001', totalControls: 93, coveredControls: 72, gapControls: 21, overCovered: 28 },
  { name: 'SOC 2 Type II', shortName: 'SOC 2', totalControls: 64, coveredControls: 58, gapControls: 6, overCovered: 41 },
  { name: 'PCI DSS v4.0', shortName: 'PCI DSS', totalControls: 78, coveredControls: 45, gapControls: 33, overCovered: 12 },
  { name: 'HIPAA Security Rule', shortName: 'HIPAA', totalControls: 42, coveredControls: 31, gapControls: 11, overCovered: 8 },
]

export const redundancyPairs: RedundancyPair[] = [
  { toolA: 'CrowdStrike Falcon', toolB: 'Cortex XDR', overlapPercent: 68, sharedCapabilities: ['EDR', 'Threat Intelligence', 'Malware Prevention'], potentialSavings: 145000 },
  { toolA: 'Splunk Enterprise', toolB: 'Microsoft Sentinel', overlapPercent: 72, sharedCapabilities: ['SIEM', 'Log Management', 'Threat Detection'], potentialSavings: 95000 },
  { toolA: 'Tenable.io', toolB: 'Qualys VMDR', overlapPercent: 64, sharedCapabilities: ['Vulnerability Scanning', 'Compliance Monitoring', 'Risk Assessment'], potentialSavings: 55000 },
  { toolA: 'Zscaler', toolB: 'Cortex XDR', overlapPercent: 28, sharedCapabilities: ['Network Detection'], potentialSavings: 18000 },
  { toolA: 'Wiz', toolB: 'Qualys VMDR', overlapPercent: 31, sharedCapabilities: ['Vulnerability Management', 'Compliance Monitoring'], potentialSavings: 22000 },
]

export const portfolioStats = {
  totalAnnualSpend: 1233000,
  totalTools: 12,
  avgUtilization: 76.5,
  redundantSpend: 335000,
  riskScore: 72,
  complianceCoverage: 82,
  potentialSavings: 335000,
  avgRiskReduction: 11.6,
}

export const budgetAllocationData = [
  { category: 'Endpoint Security', spend: 325000, percentage: 26.4 },
  { category: 'SIEM & Analytics', spend: 315000, percentage: 25.5 },
  { category: 'Identity & Access', spend: 120000, percentage: 9.7 },
  { category: 'Cloud Security', spend: 110000, percentage: 8.9 },
  { category: 'Network Security', spend: 85000, percentage: 6.9 },
  { category: 'Vulnerability Mgmt', spend: 123000, percentage: 10.0 },
  { category: 'Email Security', spend: 72000, percentage: 5.8 },
  { category: 'AppSec & DevSecOps', spend: 45000, percentage: 3.7 },
  { category: 'Secrets Mgmt', spend: 38000, percentage: 3.1 },
]

export const riskSimulationData = [
  { budget: 500000, riskScore: 45, tools: 5 },
  { budget: 700000, riskScore: 55, tools: 7 },
  { budget: 900000, riskScore: 64, tools: 9 },
  { budget: 1100000, riskScore: 71, tools: 11 },
  { budget: 1233000, riskScore: 72, tools: 12 },
  { budget: 1400000, riskScore: 76, tools: 13 },
  { budget: 1600000, riskScore: 79, tools: 14 },
  { budget: 1800000, riskScore: 81, tools: 15 },
  { budget: 2000000, riskScore: 82, tools: 16 },
]

export const monthlySpendTrend = [
  { month: 'Jul', spend: 98000, optimized: 98000 },
  { month: 'Aug', spend: 101000, optimized: 98000 },
  { month: 'Sep', spend: 103000, optimized: 95000 },
  { month: 'Oct', spend: 105000, optimized: 92000 },
  { month: 'Nov', spend: 102000, optimized: 88000 },
  { month: 'Dec', spend: 108000, optimized: 85000 },
  { month: 'Jan', spend: 104000, optimized: 82000 },
  { month: 'Feb', spend: 106000, optimized: 80000 },
  { month: 'Mar', spend: 103000, optimized: 78000 },
  { month: 'Apr', spend: 102000, optimized: 76000 },
  { month: 'May', spend: 101000, optimized: 75000 },
  { month: 'Jun', spend: 100000, optimized: 74000 },
]
