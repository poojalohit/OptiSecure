import { Routes, Route } from 'react-router-dom'
import Whitepaper from './pages/Whitepaper'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Whitepaper />} />
      <Route path="/demo" element={<Dashboard />} />
      <Route path="*" element={<Whitepaper />} />
    </Routes>
  )
}
