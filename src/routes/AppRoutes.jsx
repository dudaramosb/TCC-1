import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { Manual } from "../pages/Manual"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manual" element={<Manual />} />
    </Routes>
  )
}
