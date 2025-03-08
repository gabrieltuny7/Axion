import Head from 'next/head';
import { useEffect } from 'react'; // Importe o useEffect
import styles from '../styles/Home.module.css';

export default function Home() {
  // Inicialize o Swiper no lado do cliente
  useEffect(() => {
    const initializeSwiper = async () => {
      const Swiper = (await import('swiper')).default;
      const swipers = document.querySelectorAll('.swiper-container');
      swipers.forEach(swiper => {
        new Swiper(swiper, {
          loop: true, // Loop infinito
          autoplay: {
            delay: 3000, // Troca de slide a cada 3 segundos
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      });
    };

    initializeSwiper();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Axion Systems - Automação Residencial e Comercial</title>
        <meta name="description" content="Teste" />
        <link rel="icon" href="/favicon.ico" />
        {/* Adicione o CSS do Swiper */}
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
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
          <p>A Axion Systems é uma empresa inovadora que oferece soluções de automação residencial e corporativa, integrando tecnologias inteligentes para criar ambientes eficientes, seguros e conectados. Além disso, desenvolve sites modernos e responsivos para empresas, fortalecendo a presença online. Com foco em inovação, sustentabilidade e atendimento personalizado, a Axion Systems é a parceira ideal para quem busca integrar tecnologia, conforto e eficiência em diversos ambientes.</p>
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
            {/* Card 1: Automação Residencial e Comercial */}
            <div className={styles.serviceCard}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Slide 1: Informações escritas */}
                  <div className="swiper-slide">
                    <h3>Automação Residencial e Comercial</h3>
                    <p>Soluções personalizadas para automação de tarefas repetitivas.</p>
                  </div>
                  {/* Slide 2: Foto 1 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Automação Residencial" />
                  </div>
                  {/* Slide 3: Foto 2 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Automação Comercial" />
                  </div>
                </div>
                {/* Paginação e navegação */}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>

            {/* Card 2: Integração de Sistemas e Sites Web */}
            <div className={styles.serviceCard}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Slide 1: Informações escritas */}
                  <div className="swiper-slide">
                    <h3>Integração de Sistemas e Sites Web</h3>
                    <p>Conectamos seus sistemas para melhorar a eficiência.</p>
                  </div>
                  {/* Slide 2: Foto 1 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Integração de Sistemas" />
                  </div>
                  {/* Slide 3: Foto 2 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Desenvolvimento de Sites" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>

            {/* Card 3: Consultoria */}
            <div className={styles.serviceCard}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Slide 1: Informações escritas */}
                  <div className="swiper-slide">
                    <h3>Consultoria</h3>
                    <p>Oferecemos consultoria especializada para transformação digital.</p>
                  </div>
                  {/* Slide 2: Foto 1 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Consultoria em TI" />
                  </div>
                  {/* Slide 3: Foto 2 */}
                  <div className="swiper-slide">
                    <img src="/Fotos/axion.jpg" alt="Transformação Digital" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
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
        <p>&copy; {new Date().getFullYear()} Axion Systems. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

