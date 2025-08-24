import { useState } from "react"

export function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="w-full h-[70px] bg-[#4A90E2] dark:bg-[#1E2A38] flex items-center justify-between px-6 shadow-md">
          <h1 className="text-white text-xl font-bold">LUMA</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-lg"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        <main className="flex flex-col items-center justify-center pt-12 px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-lg">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl text-gray-600 dark:text-gray-400">
                  👤
                </span>
              </div>
              <button className="mt-3 px-4 py-2 rounded bg-[#4A90E2] text-white text-sm hover:bg-[#357ABD]">
                Editar
              </button>
            </div>

            <h2 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
              Perfil do Usuário
            </h2>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              Atualize suas informações abaixo
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Exemplo"
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="exemplo@gmail.com"
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="****"
                  className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white py-2 rounded-md font-medium"
              >
                Salvar Alterações
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}