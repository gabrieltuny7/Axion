import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Site - Automação Robótica de Processos</title>
        <meta name="description" content="Site sobre automação robótica de processos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Indusuite</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <h2>Automação Robótica de Processos</h2>
          <p>Transforme seus processos com soluções inteligentes e eficientes.</p>
          <a href="#servicos" className={styles.ctaButton}>Saiba Mais</a>
        </section>

        <section id="sobre" className={styles.section}>
          <h2>Sobre Nós</h2>
          <p>
            Somos especialistas em automação robótica de processos, oferecendo soluções personalizadas para
            otimizar sua operação e aumentar a produtividade.
          </p>
        </section>

        <section id="servicos" className={styles.section}>
          <h2>Nossos Serviços</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Automação de Processos</h3>
              <p>Soluções personalizadas para automação de tarefas repetitivas.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Integração de Sistemas</h3>
              <p>Conectamos seus sistemas para melhorar a eficiência.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Consultoria</h3>
              <p>Oferecemos consultoria especializada para transformação digital.</p>
            </div>
          </div>
        </section>

        <section id="contato" className={styles.section}>
          <h2>Contato</h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu Email" required />
            <textarea placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Indusuite. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

