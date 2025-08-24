import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="pt-10 pb-6 transition-colors duration-300 bg-gray-100 text-gray-800 dark:bg-gradient-to-b dark:from-[#0d1117] dark:to-[#1a1f27] dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h3 className="text-2xl font-bold mb-1 text-[#063557] dark:text-white">
          LUMA
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Seu assistente para cuidados com idosos
        </p>

        <ul className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <li><a href="#" className="hover:opacity-80 transition">Início</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Informações</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Contato</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Sobre Nós</a></li>
          <li><a href="#" className="hover:opacity-80 transition">Política de Privacidade</a></li>
        </ul>

        <div className="h-px w-2/3 mx-auto my-6 bg-gray-300 dark:bg-gradient-to-r dark:from-transparent dark:via-gray-700 dark:to-transparent"></div>

        <div className="flex justify-center space-x-5 mb-4">
          <a href="#" className="w-10 h-10 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaGithub className="text-lg" />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

        <p className="text-center text-xs text-gray-600 dark:text-gray-500 mt-4">
          ©️ 2025 Luma. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}