import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Axion Systems - Automação Residencial e Comercial </title>
        <meta name="description" content="Teste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Axion Systems</h1>
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
          <h2>Axion</h2>
          <p>A Axion Systems é uma empresa inovadora especializada em soluções de automação residencial e corporativa, oferecendo tecnologias inteligentes para transformar ambientes em espaços mais eficientes, seguros e conectados. Com expertise em sistemas de iluminação inteligente, climatização, segurança, gestão de energia, entretenimento e muito mais, a Axion Systems proporciona experiências personalizadas, integrando dispositivos e plataformas para atender às necessidades específicas de cada cliente.

Além dos serviços de automação, a Axion Systems também atua no desenvolvimento de sites para empresas, criando plataformas digitais modernas, responsivas e alinhadas com as demandas do mercado. Fortalecendo a presença online, a empresa combina design intuitivo e funcionalidades avançadas para entregar soluções digitais completas.

Com um foco em inovação, sustentabilidade e atendimento personalizado, a Axion Systems é a parceira ideal para quem busca integrar tecnologia, conforto e eficiência em casa, no trabalho ou no ambiente digital.</p>
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
              <h3>Automação Residencial e Comercial</h3>
              <p>Soluções personalizadas para automação de tarefas repetitivas.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Integração de Sistemas e Sites Web</h3>
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

