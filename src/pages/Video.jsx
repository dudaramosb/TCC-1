import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Video() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffffff] to-[#ffffff] dark:from-[#000000] dark:to-[#1f2937] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#063557] dark:text-white">
        Robô Luma abre a gaveta de medicamentos         </h1>

        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-blue-300 dark:border-blue-700">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AGILt4jvpPQ"
              title="Vídeo Corrida do Remédio do Vovô"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
