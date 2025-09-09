import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import geImg from "../assets/ge.jpeg";
import natiImg from "../assets/nati.jpeg";
import faImg from "../assets/fa.jpeg";
import rotiImg from "../assets/robson.jpeg";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // 🔹 importei os ícones

export function Sobre() {
  const team = [
    { name: "Fabiolla Belo", img: faImg, linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    { name: "Geovanna Garcia", img: geImg, linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    { name: "Maria Eduarda", img: "/team/maria.jpg", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    { name: "Natália Costa", img: natiImg, linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
    { name: "Robson Piassa", img: rotiImg, linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-branco)] dark:bg-[var(--color-fundo-escuro)]">
      <Header />
      <main className="px-6 py-12 text-[var(--color-preto-texto)] dark:text-[var(--color-texto-claro)]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-[var(--color-texto-azul-escuro)] dark:text-[var(--color-texto-claro)]">
            Conheça nosso time
          </h1>
        </div>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-16 text-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-3 font-semibold">{member.name}</h3>
              {/* 🔹 Ícones do Instagram e LinkedIn */}
              <div className="flex gap-3 mt-2">
                <a href={member.instagram} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-white hover:opacity-75 text-xl">
                  <FaInstagram />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-white
                hover:opacity-75 text-xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </section>

        <div className="max-w-6xl mx-auto border-t border-gray-300 dark:border-gray-600 my-12"></div>

        <section className="max-w-3xl mx-auto p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[var(--color-texto-azul-escuro)] dark:text-[var(--color-texto-claro)]">
            Fale conosco
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-lg border border-gray-500 dark:border-white bg-white dark:bg-white text-gray-600 dark:text-black"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full h-10 rounded-lg border border-gray-500 dark:border-white bg-white dark:bg-white text-gray-600 dark:text-black"
            />
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full h-10 rounded-lg border border-gray-500 dark:border-white bg-white dark:bg-white text-gray-600 dark:text-black"
            />
            <textarea
              placeholder="Mensagem"
              className="w-full h-10 rounded-lg border border-gray-500 dark:border-white bg-white dark:bg-white text-gray-600 dark:text-black resize-y"
            ></textarea>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 "
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}