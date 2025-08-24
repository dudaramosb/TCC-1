import { Header } from "../components/Header";
import Robo from "../assets/images/robo.png";
import { Footer } from "../components/Footer";

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
            <button className="px-4 py-2 bg-[var(--color-azul-claro)] text-[var(--color-branco)] font-semibold rounded-lg hover:opacity-90 transition mb-6">
              Baixar o aplicativo
            </button>
            <div>
              <h3 className="font-semibold text-[#063557] dark:text-[var(--color-texto-claro)] mb-2">
                Lembrete de medicamentos
              </h3>
              <p className="text-sm text-gray-600 dark:text-[var(--color-texto-claro)]">
                Desenvolvido pensando
                especialmente em idosos que
                moram sozinhos ou precisam de
                auxilio no dia a dia.
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
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-3">
              💊 Lembretes inteligentes
            </h3>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] text-sm">
              Alertas em tempo real para cada medicação.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)] rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-3">
              🛡 Uso seguro dos medicamentos
            </h3>
            <p className="text-gray-600 dark:text-[var(--color-texto-claro)] text-sm">
              Pensado na autonomia e segurança especialmente de idosos na hora de medicar-se.
            </p>
          </div>

          <div className="p-6 bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)] rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-gray-800 dark:text-[var(--color-texto-claro)] mb-3">
              📈 Acompanhamento de saúde
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
