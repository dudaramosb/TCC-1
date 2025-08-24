import { Header } from "../components/Header";


export function Manual() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Manual de Uso
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Como Usar</h2>
          <p className="leading-relaxed mb-2">
            Aqui você vai aprender passo a passo como utilizar nosso sistema de forma prática e eficiente.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Passo 1: Faça login na sua conta.</li>
            <li>Passo 2: Navegue até a seção desejada.</li>
            <li>Passo 3: Siga as instruções de cada módulo.</li>
            <li>Passo 4: Salve suas alterações antes de sair.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Dicas e Observações</h2>
          <p className="leading-relaxed mb-2">
            Lembre-se de sempre revisar suas informações antes de enviar. Caso encontre algum problema, entre em contato com o suporte.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use um navegador atualizado para melhor experiência.</li>
            <li>Mantenha suas credenciais seguras.</li>
            <li>Consulte nossa FAQ para dúvidas comuns.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="leading-relaxed">
            Para suporte, envie um email para{" "}
            <a href="mailto:suporte@empresa.com" className="text-blue-500 underline">
              suporte@empresa.com
            </a>{" "}
            ou ligue para (00) 1234-5678.
          </p>
        </section>
      </main>
    </div>
  );
}
