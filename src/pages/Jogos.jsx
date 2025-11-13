import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaPills, FaPlayCircle } from "react-icons/fa";
import { MdOutlineVideogameAsset } from "react-icons/md";

import {Link} from "react-router"


export function Jogos() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffffff] to-[#ffffff] dark:from-[#000000] dark:to-[#1f2937] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <MdOutlineVideogameAsset className="text-5xl text-blue-600 dark:text-blue-400 drop-shadow-lg" />
          <h1 className="text-3xl md:text-3xl font-bold text-center drop-shadow-lg text-[rgb(28,47,90)] dark:text-[#ffffff]">
            Ajude o vovô
          </h1>
        </div>

        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed">
          <FaPills className="inline-block text-blue-600 dark:text-blue-400 mr-2 text-2xl" />
          O vovô esqueceu de tomar os remédios! Corra para ajuda-lo a vencer os desafios e concluir sua rotina de medicamentos.
        </p>
        <div className="w-full max-w-2xl mb-10">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 flex items-center justify-center">
    
    {/* Detalhes decorativos */}
    <img
      src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
      alt="Comprimido"
      className="absolute w-16 h-16 top-4 left-6 opacity-90 rotate-[-15deg]"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/2966/2966482.png"
      alt="Caixa de remédios"
      className="absolute w-20 h-20 bottom-6 right-8 opacity-90 rotate-[10deg]"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/4329/4329443.png"
      alt="Frasco de remédio"
      className="absolute w-16 h-16 top-8 right-10 opacity-90 rotate-[8deg]"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/2966/2966491.png"
      alt="Cápsulas coloridas"
      className="absolute w-14 h-14 bottom-8 left-10 opacity-90 rotate-[-8deg]"
    />

    {/* Fundo translúcido suave */}
    <div className="absolute inset-0 bg-white/20 dark:bg-black/20" />

    {/* Texto central */}
    <div className="relative text-center px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
        Corrida do Remédio do Vovô
      </h2>
      <p className="text-blue-800 dark:text-blue-200 mt-3 text-lg max-w-lg mx-auto leading-relaxed font-medium">
        Ajude o vovô a completar sua rotina de medicamentos enquanto se diverte nessa aventura.
      </p>
    </div>
  </div>
</div>





        <a href ="https://gd.games/games/83596ff1-f3fe-4eaa-a114-8eaaacd41437"
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
        >
          <FaPlayCircle className="text-2xl" />
          Jogar Agora
        </a>
      </main>

      <Footer />
    </div>
  );
}
