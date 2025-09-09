import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Robo from "../assets/robo.png";


import { BsFileText, BsShieldFillCheck, BsBarChartLine } from "react-icons/bs";

export function Home() {
  return (
    <div className="min-h-screen bg-[var(--fundo-claro)] dark:bg-[var(--color-fundo-escuro)] transition-colors duration-300">
      <Header />
      <main className="pt-[20px] flex flex-col items-center px-6 lg:px-20">

        <section className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-7xl w-full">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#063557] dark:text-[var(--color-texto-claro)] mb-4">
              Seu novo assistente de saúde chegou
            </h2>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] mb-6">
              Tecnologia com empatia: um robô que ajuda idosos a lembrar dos seus
              medicamentos e cuidar da saúde com mais autonomia.
            </p>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 ">Baixar aplicativo</button>
            <div>
              <h3 className="font-semibold text-[#063557] dark:text-[var(--color-texto-claro)] mb-2">
                Lembrete de medicamentos
              </h3>
              <p className="text-sm text-gray-600 dark:text-[var(--color-texto-claro)]">
                Desenvolvido pensando especialmente em idosos que moram sozinhos
                ou precisam de auxílio no dia a dia.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={Robo}
              alt="Assistente de saúde LUMA"
              className="w-64 md:w-80 lg:w-[420px] drop-shadow-lg"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-12 max-w-7xl w-full">
          <div className="p-6 bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)] rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 text-2xl text-[#063557] dark:text-[var(--color-texto-claro)]">
              <BsFileText />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-2">
              Lembretes inteligentes
            </h3>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] text-sm">
              Alertas em tempo real para cada medicação.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)] rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 text-2xl text-[#063557] dark:text-[var(--color-texto-claro)]">
              <BsShieldFillCheck />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-2">
              Uso seguro dos medicamentos
            </h3>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] text-sm">
              Pensado na autonomia e segurança especialmente de idosos na hora de medicar-se.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)] rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3 text-2xl text-[#063557] dark:text-[var(--color-texto-claro)]">
              <BsBarChartLine />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-2">
              Acompanhamento de saúde
            </h3>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] text-sm">
              Relatórios e registros acessíveis a qualquer momento.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}