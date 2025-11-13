import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { Manual } from "../pages/Manual"
import { Instrucoes } from "../pages/Instrucoes"
import { Produtos } from "../pages/Produtos"
import { Referencias } from "../pages/Referencias"
import { Sobre } from "../pages/Sobre"
import { Jogos } from "../pages/Jogos"
import {Video} from "../pages/Video"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/instrucoes" element={<Instrucoes/>} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/referencias" element={<Referencias />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/video" element={<Video />} />

    </Routes>
  )
}
