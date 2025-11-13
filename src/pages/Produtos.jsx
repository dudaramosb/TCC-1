import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

import esp32 from "../assets/esp.png";
import oled from "../assets/oled.png";
import servo from "../assets/servo.png";
import rtc from "../assets/rtc.png";
import df from "../assets/df.png";
import buzzer from "../assets/buzzer.png";
import fonte from "../assets/fonte.png";
import protoboard from "../assets/protoboard.png";
import fila from "../assets/fila.png";

export function Produtos() {
  const navigate = useNavigate();

  const produtos = [
    { id: 1, nome: "Módulo ESP32 Wi-Fi + Bluetooth", preco: 60, imagem: esp32 },
    { id: 2, nome: "Servo motor SG90 Micro 9g", preco: 25, imagem: servo },
    { id: 3, nome: "Display OLED 128x64", preco: 32, imagem: oled },
    { id: 4, nome: "RTC DS3231", preco: 35, imagem: rtc },
    { id: 5, nome: "Módulo de voz DFPlayer Mini + alto-falante", preco: 40, imagem: df },
    { id: 6, nome: "Buzzer e LEDs", preco: 10, imagem: buzzer },
    { id: 7, nome: "Fonte 5V / Power Bank", preco: 60, imagem: fonte },
    { id: 8, nome: "Protoboard, fios e botão de configuração", preco: 30, imagem: protoboard },
    { id: 9, nome: "Peças 3D (PLA/ABS)", preco: 90, imagem: fila },
  ];

  const total = produtos.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] dark:bg-[#000000] text-gray-900 dark:text-white relative">
      <Header />

      <main className="flex-1 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#063557] dark:text-[#ffffff]">
          Produtos
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Produtos usados no nosso projeto
        </p>

        {/* ✅ Botão que leva para /video usando o react-router */}
        <button
          onClick={() => navigate("/video")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md mb-10 transition-transform transform hover:scale-105"
        >
          🎥 Ver vídeo do robô
        </button>

        {/* Grade dos produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="w-[370px] h-[380px] border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-[#090A10] shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              <div className="h-2/3 flex items-center justify-center bg-[#E8F5FF] dark:bg-[#1B1D32] text-gray-500 dark:text-gray-300 rounded-lg mb-3">
                {produto.imagem ? (
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  "Imagem"
                )}
              </div>
              <div className="flex flex-col items-center justify-end flex-1">
                <h3 className="text-lg font-semibold text-center">{produto.nome}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mt-1">
                  R$ {produto.preco},00
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-6 right-6 bg-indigo-500 dark:bg-indigo-700 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors">
        <AiOutlineDollarCircle size={24} />
        <span className="font-semibold">Preço total: R$ {total},00</span>
      </div>

      <Footer />
    </div>
  );
}
