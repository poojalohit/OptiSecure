import { createContext, useContext, useState, type ReactNode } from 'react'
import { toolCatalog, type CatalogTool } from '../data/toolCatalog'
import { industryPresets, type IndustryPreset } from '../data/industryPresets'

interface PortfolioState {
  preset: IndustryPreset | null
  tools: CatalogTool[]
  setPreset: (id: string) => void
  addTool: (id: string) => void
  removeTool: (id: string) => void
  hasToolId: (id: string) => boolean
  availableTools: () => CatalogTool[]
}

const Ctx = createContext<PortfolioState | null>(null)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [preset, setPresetObj] = useState<IndustryPreset | null>(null)
  const [toolIds, setToolIds] = useState<string[]>([])

  function setPreset(id: string) {
    const p = industryPresets.find(x => x.id === id) ?? null
    setPresetObj(p)
    setToolIds(p?.preloadedToolIds ?? [])
  }

  function addTool(id: string) {
    setToolIds(prev => prev.includes(id) ? prev : [...prev, id])
  }

  function removeTool(id: string) {
    setToolIds(prev => prev.filter(x => x !== id))
  }

  function hasToolId(id: string) {
    return toolIds.includes(id)
  }

  function availableTools() {
    return toolCatalog.filter(t => !toolIds.includes(t.id))
  }

  const tools = toolIds.map(id => toolCatalog.find(t => t.id === id)!).filter(Boolean)

  return (
    <Ctx.Provider value={{ preset, tools, setPreset, addTool, removeTool, hasToolId, availableTools }}>
      {children}
    </Ctx.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('usePortfolio must be used inside PortfolioProvider')
  return ctx
}
