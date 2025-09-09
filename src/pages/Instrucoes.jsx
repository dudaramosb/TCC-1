import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaPills, FaClock, FaBell, FaBoxOpen } from "react-icons/fa";

import mariaENataliaNaoSabemFazer from "../assets/robob.png"


export function Instrucoes() {
  return (
    <div className="min-h-screen bg-[var(--color-branco)] dark:bg-[var(--color-fundo-escuro)] flex flex-col">
      <Header />
      <main className="flex-1 px-8 py-12 text-[var(--color-preto)] dark:text-[var(--color-texto-claro)] flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-[var(--color-texto-azul-escuro)] dark:text-white text-center">
            Instruções
          </h1>
          <p className="text-lg text-center">
            Este guia mostra como usar o robô criado para ajudar idosos a tomarem os remédios certos na hora certa.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6 max-w-6xl w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <div className="relative p-6 rounded-lg shadow-sm bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)]">
              <h2 className="flex items-center gap-2 font-medium text-lg mb-2 text-[var(--color-preto)] dark:text-white">
                <FaPills /> Colocar os remédios
              </h2>
              <p>
                Abra o robô, coloque os remédios nos compartimentos e use o aplicativo para registrar qual remédio está em cada um.
              </p>
              <span className="absolute bottom-2 right-2 text-sm font-bold text-[var(--color-preto)] dark:text-white">1</span>
            </div>

            <div className="relative p-6 rounded-lg shadow-sm bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)]">
              <h2 className="flex items-center gap-2 font-medium text-lg mb-2 text-[var(--color-preto)] dark:text-white">
                <FaClock /> Cadastrar os horários
              </h2>
              <p>
                No app ou no site, cadastre os horários que cada remédio deve ser tomado.
              </p>
              <span className="absolute bottom-2 right-2 text-sm font-bold text-[var(--color-preto)] dark:text-white">2</span>
            </div>

            <div className="relative p-6 rounded-lg shadow-sm bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)]">
              <h2 className="flex items-center gap-2 font-medium text-lg mb-2 text-[var(--color-preto)] dark:text-white">
                <FaBell /> Lembrete automático
              </h2>
              <p>
                O robô avisa o idoso na hora certa com voz, luz ou som.
              </p>
              <span className="absolute bottom-2 right-2 text-sm font-bold text-[var(--color-preto)] dark:text-white">3</span>
            </div>

            <div className="relative p-6 rounded-lg shadow-sm bg-[var(--color-azul-claro-detalhes)] dark:bg-[var(--color-quadrados-escuros)]">
              <h2 className="flex items-center gap-2 font-medium text-lg mb-2 text-[var(--color-preto-texto)] dark:text-white">
                <FaBoxOpen /> Entrega do remédio
              </h2>
              <p>
                O robô fala qual é o remédio, abre o compartimento certo e mostra ao idoso qual tomar.
              </p>
              <span className="absolute bottom-2 right-2 text-sm font-bold text-[var(--color-preto)] dark:text-white">4</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-end">
            <img
              src={mariaENataliaNaoSabemFazer}
              alt="disse o amorável professor Marcio"
        className="w-72 md:w-80"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

