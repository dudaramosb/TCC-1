import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Manual() {
  return (
    <div className="min-h-screen bg-[var(--color-branco)] dark:bg-[var(--color-fundo-escuro)]">
      <Header />

      <main className="px-8 py-12 text-[var(--color-preto-texto)] dark:text-[var(--color-texto-claro)]">
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[#063557] dark:text-[var(--color-texto-claro)]">Como usar?</h1>
          <p className="text-lg opacity-80 text-[var(--color-texto-cinza-medio)] dark:text-[var(--color-texto-claro)]">
            Este guia mostra como usar o robô Luma.
          </p>
        </div>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="text-left md:pl-4 lg:pl-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-azul-claro)' }}>1. Configure os horários no aplicativo</h2>
                <p>No app da Luma, cadastra-se os horários e o nome de cada medicação conforme a rotina do idoso e guarda o remédio no compartimento do robô.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-azul-claro)' }}>2. A Luma avisa no horário certo</h2>
                <p>Quando chega o momento de tomar o remédio, a Luma' emite um alarme sonoro e visual (LED piscando) para alertar o idoso.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-azul-claro)' }}>3. O idoso aperta o botão</h2>
                <p>Após o aviso, o idoso pressiona um botão na Luma para confirmar que está pronto para se medicar.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-azul-claro)' }}>4. A gavetinha se abre</h2>
                <p>A Luma libera o compartimento do remédio, usando um motor, permitindo acesso seguro e controlado à dose certa.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-azul-claro)' }}>5. Registro automático no app</h2>
                <p>A ação é registrada no aplicativo, formando um histórico de uso para que familiares ou profissionais de saúde acompanhem a adesão ao tratamento.</p>
              </div>
          </div>

    
          <div className="flex justify-center md:justify-end items-start">
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
''