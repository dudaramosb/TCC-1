import { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { FaBook, FaInfoCircle, FaBox, FaUsers } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <header
      className="top-0 w-full h-[80px] 
      bg-[var(--color-azul-claro)] dark:bg-[var(--color-cinza-azulado)] 
      flex items-center justify-between px-6 shadow-md z-50 relative"
    >
     
      <div className="flex items-center space-x-4">
        <button
          onClick={toggle}
          className={`text-2xl transition ${
            !isDark
              ? "text-[var(--color-branco)] opacity-100"
              : "text-[var(--color-branco)] opacity-50 hover:opacity-80"
          }`}
          aria-label="Modo claro"
        >
          <BsFillSunFill />
        </button>
        <button
          onClick={toggle}
          className={`text-2xl transition ${
            isDark
              ? "text-[var(--color-branco)] opacity-100"
              : "text-[var(--color-branco)] opacity-50 hover:opacity-80"
          }`}
          aria-label="Modo escuro"
        >
          <IoMdMoon />
        </button>
      </div>

      <h1 className="text-[var(--color-branco)] text-[40px] font-bold text-center absolute left-1/2 -translate-x-1/2">
        LUMA
      </h1>

      
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
