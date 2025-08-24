import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { FaBook, FaInfoCircle, FaBox, FaUsers } from "react-icons/fa";

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
    <header
      className=" top-0 w-full h-[80px] 
      bg-[var(--color-azul-claro)] dark:bg-[var(--color-cinza-azulado)] 
      flex items-center justify-between px-6 shadow-md z-50 relative"
    >
      {/* Botões de tema */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(false)}
          className={`text-2xl transition ${
            !darkMode ? "text-[var(--color-branco)] opacity-100" : "text-[var(--color-branco)] opacity-50 hover:opacity-80"
          }`}
          aria-label="Modo claro"
        >
          <BsFillSunFill />
        </button>
        <button
          onClick={() => setDarkMode(true)}
          className={`text-2xl transition ${
            darkMode ? "text-[var(--color-branco)] opacity-100" : "text-[var(--color-branco)] opacity-50 hover:opacity-80"
          }`}
          aria-label="Modo escuro"
        >
          <IoMdMoon />
        </button>
      </div>

      {/* Logo */}
      <h1
        className="text-[var(--color-branco)] text-[40px] font-bold text-center absolute left-1/2 -translate-x-1/2"
      >
        LUMA
      </h1>

      {/* Ícones de navegação */}
      <nav className="flex items-center space-x-6 text-[var(--color-branco)] text-2xl">
        <a href="/referencias" className="hover:opacity-80 transition" aria-label="Referências">
          <FaBook />
        </a>
        <a href="/manual" className="hover:opacity-80 transition" aria-label="Manual">
          <FaInfoCircle />
        </a>
        <a href="/produtos" className="hover:opacity-80 transition" aria-label="Produtos">
          <FaBox />
        </a>
        <a href="/nos" className="hover:opacity-80 transition" aria-label="Nós">
          <FaUsers />
        </a>
      </nav>
    </header>
  );
}