import type { CatalogTool } from '../data/toolCatalog'

export function computeRedundancies(tools: CatalogTool[]) {
  const pairs: { a: CatalogTool; b: CatalogTool; shared: string[]; overlap: number; savings: number }[] = []
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      const shared = tools[i].capabilities.filter(c => tools[j].capabilities.includes(c))
      if (shared.length === 0) continue
      const totalCaps = new Set([...tools[i].capabilities, ...tools[j].capabilities]).size
      const overlap = Math.round((shared.length / totalCaps) * 100)
      if (overlap < 15) continue
      const cheaper = Math.min(tools[i].annualCost, tools[j].annualCost)
      pairs.push({ a: tools[i], b: tools[j], shared, overlap, savings: Math.round(cheaper * overlap / 100) })
    }
  }
  return pairs.sort((x, y) => y.overlap - x.overlap)
}

export function computeRedundancyForNewTool(existing: CatalogTool[], newTool: CatalogTool) {
  return existing
    .map(t => {
      const shared = t.capabilities.filter(c => newTool.capabilities.includes(c))
      if (shared.length === 0) return null
      const totalCaps = new Set([...t.capabilities, ...newTool.capabilities]).size
      const overlap = Math.round((shared.length / totalCaps) * 100)
      return { existingTool: t, shared, overlap }
    })
    .filter((x): x is NonNullable<typeof x> => x !== null && x.overlap >= 10)
    .sort((a, b) => b.overlap - a.overlap)
}

const frameworkControls: Record<string, { total: number; perTool: number }> = {
  NIST: { total: 108, perTool: 12 },
  'SOC 2': { total: 64, perTool: 8 },
  'ISO 27001': { total: 93, perTool: 10 },
  'PCI DSS': { total: 78, perTool: 9 },
  HIPAA: { total: 42, perTool: 7 },
  CIS: { total: 56, perTool: 6 },
}

export function computeCompliance(tools: CatalogTool[], requiredFrameworks: string[]) {
  return requiredFrameworks.map(fw => {
    const info = frameworkControls[fw] ?? { total: 50, perTool: 8 }
    const covering = tools.filter(t => t.complianceFrameworks.includes(fw))
    const rawCovered = covering.length * info.perTool
    const covered = Math.min(rawCovered, info.total)
    const gaps = info.total - covered
    const overCovered = Math.max(0, rawCovered - info.total)
    return { framework: fw, totalControls: info.total, covered, gaps, overCovered, toolCount: covering.length }
  })
}

export function computeComplianceForNewTool(tools: CatalogTool[], newTool: CatalogTool, requiredFrameworks: string[]) {
  const before = computeCompliance(tools, requiredFrameworks)
  const after = computeCompliance([...tools, newTool], requiredFrameworks)
  return requiredFrameworks.map((fw, i) => ({
    framework: fw,
    before: before[i],
    after: after[i],
    newGapsClosed: before[i].gaps - after[i].gaps,
    newOverCoverage: after[i].overCovered - before[i].overCovered,
  }))
}

export function computeRoi(tool: CatalogTool) {
  const estimatedBreachCost = 4450000
  const riskReductionDecimal = tool.riskReduction / 100
  const annualRiskSaved = estimatedBreachCost * riskReductionDecimal
  const netValue = annualRiskSaved - tool.annualCost
  const roiPercent = Math.round((netValue / tool.annualCost) * 100)
  const paybackMonths = Math.round((tool.annualCost / annualRiskSaved) * 12)
  return { annualRiskSaved: Math.round(annualRiskSaved), netValue: Math.round(netValue), roiPercent, paybackMonths, costPerRiskPoint: Math.round(tool.annualCost / tool.riskReduction) }
}

export function computePortfolioSummary(tools: CatalogTool[]) {
  const totalSpend = tools.reduce((s, t) => s + t.annualCost, 0)
  const totalRisk = tools.reduce((s, t) => s + t.riskReduction, 0)
  const avgRisk = tools.length ? +(totalRisk / tools.length).toFixed(1) : 0
  const redundancies = computeRedundancies(tools)
  const redundantSpend = redundancies.reduce((s, r) => s + r.savings, 0)
  return { totalSpend, totalTools: tools.length, totalRisk: Math.min(totalRisk, 95), avgRisk, redundantSpend, redundancyPairs: redundancies.length }
}
