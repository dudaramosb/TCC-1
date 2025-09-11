import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { FaBook, FaInfoCircle, FaBox, FaLink } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";

import {Link} from "react-router"

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="top-0 w-full bg-[var(--color-azul-claro)] dark:bg-[var(--color-cinza-azulado)] flex items-center justify-between px-3 sm:px-6 shadow-md z-50 relative h-[60px] sm:h-[70px]">
      
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={() => setDarkMode(false)}
          className={`text-lg sm:text-xl transition ${!darkMode ? "opacity-100 text-[var(--color-branco)]" : "opacity-50 hover:opacity-80 text-[var(--color-branco)]"}`}
        >
          <BsFillSunFill />
        </button>
        <button
          onClick={() => setDarkMode(true)}
          className={`text-lg sm:text-xl transition ${darkMode ? "opacity-100 text-[var(--color-branco)]" : "opacity-50 hover:opacity-80 text-[var(--color-branco)]"}`}
        >
          <IoMdMoon />
        </button>
      </div>

      <Link
        to="/"
        className="text-[var(--color-branco)] hover:scale-105 transition-all duration-300 text-[20px] sm:text-[28px] font-bold text-center absolute left-1/2 -translate-x-1/2"
      >
        LUMA
      </Link>

      <nav className="flex items-center space-x-3 sm:space-x-6 text-[var(--color-branco)]">
       <Link to="/referencias" className="flex flex-col items-center hover:opacity-80 transition">
          <FaLink className="text-base sm:text-lg mb-0.5" />
          <span className="hidden sm:inline text-[10px] sm:text-xs">Links</span>
        </Link>
        
        <Link to="/instrucoes" className="flex flex-col items-center hover:opacity-80 transition">
          <FaBook className="text-base sm:text-lg mb-0.5" />
          <span className="hidden sm:inline text-[10px] sm:text-xs">Instruções</span>
        </Link>
        <Link to="/produtos" className="flex flex-col items-center hover:opacity-80 transition">
          <FaBox className="text-base sm:text-lg mb-0.5" />
          <span className="hidden sm:inline text-[10px] sm:text-xs">Produtos</span>
        </Link>
        <Link to="/sobre" className="flex flex-col items-center hover:opacity-80 transition">
          <FaInfoCircle className="text-base sm:text-lg mb-0.5" />
          <span className="hidden sm:inline text-[10px] sm:text-xs">Nós</span>
        </Link>

        <Link to="/jogos" className="flex flex-col items-center hover:opacity-80 transition">
          <MdSportsEsports className="text-base sm:text-lg mb-0.5" />
          <span className="hidden sm:inline text-[10px] sm:text-xs">Jogos</span>
        </Link>
      </nav>
    </header>
  );
}