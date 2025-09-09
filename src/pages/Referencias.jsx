import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Referencias() {
  return (
    <div className="min-h-screen bg-[var(--color-branco)] dark:bg-[var(--color-fundo-escuro)] text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)] flex flex-col">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--color-texto-azul-escuro)] dark:text-[var(--color-texto-claro)]"
        >
          Referências
        </h2>

        <p className="text-base md:text-lg text-justify leading-relaxed mb-8 text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)]">
          Nesta seção, estão listados os artigos científicos e as fontes confiáveis que embasaram o
          desenvolvimento do nosso projeto de robô assistente para lembretes de medicamentos.
          As referências aqui incluídas foram fundamentais para a definição das funcionalidades,
          a garantir segurança no uso e a aplicar de boas práticas em tecnologia assistiva.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://repositorio.ufu.br/bitstream/123456789/41934/1/DesenvolvimentoRoboAssistente.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg md:text-xl text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)] hover:underline"
          >
            <span role="img" aria-label="link">🔗</span>
            Desenvolvimento de um Robô Assistente Pessoal.
          </a>

          <a
            href="https://ojs.focopublicacoes.com.br/foco/article/view/6069/4634"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg md:text-xl text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)] hover:underline"
          >
            <span role="img" aria-label="link">🔗</span>
            A Aplicação de Inteligência Artificial e Robótica Assistiva no Cuidado de Idosos.
          </a>

          <a
            href="https://seer.upf.br/index.php/rbceh/article/view/14116/114117376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg md:text-xl text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)] hover:underline"
          >
            <span role="img" aria-label="link">🔗</span>
            Inteligência Artificial Adaptada a Idosos.
          </a>

          <a
            href="https://revista.fatectq.edu.br/interfacetecnologica/article/view/1275/681"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg md:text-xl text-[var(--color-texto-cinza-claro)] dark:text-[var(--color-texto-claro)] hover:underline"
          >
            <span role="img" aria-label="link">🔗</span>
            Uso de Robôs de Serviço para Apoio e Cuidado de Pessoas Idosas.
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

