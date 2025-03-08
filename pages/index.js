import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
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
      <header className={`${styles.header} navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container">
          <div className={styles.logo}>
            <h1 className="navbar-brand">Axion Systems</h1>
          </div>
          <nav className="navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#sobre" className="nav-link">Sobre</a></li>
              <li className="nav-item"><a href="#servicos" className="nav-link">Serviços</a></li>
              <li className="nav-item"><a href="#contato" className="nav-link">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.main}>
        <section id="home" className={`${styles.hero} text-center py-5`}>
          <div className="container">
            <h2 className="display-4">Axion</h2>
            <p className="lead">
              A Axion Systems é uma empresa inovadora que oferece soluções de automação residencial e corporativa, integrando tecnologias inteligentes para criar ambientes eficientes, seguros e conectados. Além disso, desenvolve sites modernos e responsivos para empresas, fortalecendo a presença online. Com foco em inovação, sustentabilidade e atendimento personalizado, a Axion Systems é a parceira ideal para quem busca integrar tecnologia, conforto e eficiência em diversos ambientes.
            </p>
            <a href="#servicos" className={`${styles.ctaButton} btn btn-primary btn-lg`}>Saiba Mais</a>
          </div>
        </section>

        <section id="sobre" className={`${styles.section} py-5`}>
          <div className="container">
            <h2 className="text-center mb-4">Sobre Nós</h2>
            <p className="text-center">
              Somos especialistas em automação robótica de processos, oferecendo soluções personalizadas para
              otimizar sua operação e aumentar a produtividade.
            </p>
          </div>
        </section>

        <section id="servicos" className={`${styles.section} py-5`}>
          <div className="container">
            <h2 className="text-center mb-4">Nossos Serviços</h2>
            <div className="row">
              {/* Card 1: Automação Residencial e Comercial */}
              <div className="col-md-4 mb-4">
                <div className={`${styles.serviceCard} card h-100`}>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* Slide 1: Informações escritas */}
                      <div className="swiper-slide card-body">
                        <h3 className="card-title">Automação Residencial e Comercial</h3>
                        <p className="card-text">Soluções personalizadas para automação de tarefas repetitivas.</p>
                      </div>
                      {/* Slide 2: Foto 1 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Automação Residencial" className="card-img-top" />
                      </div>
                      {/* Slide 3: Foto 2 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Automação Comercial" className="card-img-top" />
                      </div>
                    </div>
                    {/* Paginação e navegação */}
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Integração de Sistemas e Sites Web */}
              <div className="col-md-4 mb-4">
                <div className={`${styles.serviceCard} card h-100`}>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* Slide 1: Informações escritas */}
                      <div className="swiper-slide card-body">
                        <h3 className="card-title">Integração de Sistemas e Sites Web</h3>
                        <p className="card-text">Conectamos seus sistemas para melhorar a eficiência.</p>
                      </div>
                      {/* Slide 2: Foto 1 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Integração de Sistemas" className="card-img-top" />
                      </div>
                      {/* Slide 3: Foto 2 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Desenvolvimento de Sites" className="card-img-top" />
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Consultoria */}
              <div className="col-md-4 mb-4">
                <div className={`${styles.serviceCard} card h-100`}>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* Slide 1: Informações escritas */}
                      <div className="swiper-slide card-body">
                        <h3 className="card-title">Consultoria</h3>
                        <p className="card-text">Oferecemos consultoria especializada para transformação digital.</p>
                      </div>
                      {/* Slide 2: Foto 1 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Consultoria em TI" className="card-img-top" />
                      </div>
                      {/* Slide 3: Foto 2 */}
                      <div className="swiper-slide">
                        <img src="/Fotos/axion.jpg" alt="Transformação Digital" className="card-img-top" />
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className={`${styles.section} py-5`}>
          <div className="container">
            <h2 className="text-center mb-4">Contato</h2>
            <form className={styles.contactForm}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Seu Nome" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Seu Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Sua Mensagem" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className={`${styles.footer} py-3 bg-dark text-white text-center`}>
        <p>&copy; {new Date().getFullYear()} Axion Systems. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

