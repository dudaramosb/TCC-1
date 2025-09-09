import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="pt-6 pb-4 transition-colors duration-300 bg-gradient-to-b from-[#F5FBFF] to-[#B7CFE3] text-gray-800 dark:bg-gradient-to-b dark:from-[#1B1D32] dark:to-[#000000] dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h3 className="text-xl font-bold mb-1 text-[#1B1D32] dark:text-white">
          LUMA
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Seu assistente para cuidados com idosos
        </p>

        <ul className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <li><a href="#" className="hover:opacity-80 transition">Informações</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Contato</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Sobre Nós</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Política de Privacidade</a></li>
        </ul>

        <div className="h-px w-2/3 mx-auto my-4 bg-gray-300 dark:bg-gradient-to-r dark:from-transparent dark:via-gray-700 dark:to-transparent"></div>

        <div className="flex justify-center space-x-4 mb-3">
          <a href="#" className="w-9 h-9 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaGithub className="text-base" />
          </a>
          <a href="#" className="w-9 h-9 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaLinkedin className="text-base" />
          </a>
          <a href="#" className="w-9 h-9 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaInstagram className="text-base" />
          </a>
          <a href="#" className="w-9 h-9 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaWhatsapp className="text-base" />
          </a>
        </div>

        <p className="text-center text-xs text-gray-600 dark:text-gray-500 mt-2">
          ©️ 2025 Luma. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}