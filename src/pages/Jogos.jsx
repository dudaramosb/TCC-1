import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaPills, FaPlayCircle } from "react-icons/fa";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { Link } from "../components/Link";

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
          <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              espaço pro vídeo demo
            </span>
          </div>
        </div>

        <Link
          to="https://jdevelop.com/seu-jogo"
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
        >
          <FaPlayCircle className="text-2xl" />
          Jogar Agora
        </Link>
      </main>

      <Footer />
    </div>
  );
}
