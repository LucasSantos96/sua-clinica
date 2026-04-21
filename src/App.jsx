import React from 'react';

const navLinks = ['Início', 'Sobre', 'Tratamentos', 'Resultados', 'Depoimentos', 'Blog', 'Contato'];

const treatments = [
  { title: 'Limpeza de Pele', desc: 'Pele limpa, saudável e renovada com resultados visíveis desde a 1ª sessão.' },
  { title: 'Botox', desc: 'Suavize rugas e linhas de expressão, promovendo um aspecto mais jovem.' },
  { title: 'Harmonização Facial', desc: 'Equilíbrio e harmonia para realçar sua beleza natural com segurança.' },
  { title: 'Depilação a Laser', desc: 'Pele lisa e livre de pelos com tecnologia de ponta e máximo conforto.' }
];

const benefits = [
  'Profissionais especializados',
  'Tecnologia de ponta',
  'Protocolos exclusivos',
  'Segurança e qualidade',
  'Acompanhamento completo'
];

const posts = [
  'Skincare: 5 passos essenciais para uma pele saudável',
  'Botox preventivo: quando começar e quais os benefícios',
  'Autoestima e bem-estar: como a estética pode transformar'
];

export function App() {
  return (
    <div className="page">
      <header className="header container">
        <div className="logo">Sua Clínica <span>ESTÉTICA AVANÇADA</span></div>
        <nav>{navLinks.map((link) => <a key={link} href="#">{link}</a>)}</nav>
        <button className="cta">Agendar agora</button>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">CUIDADO QUE TRANSFORMA</p>
          <h1>Realce sua beleza, eleve sua <em>autoestima</em></h1>
          <p>Tratamentos estéticos personalizados para realçar o que você tem de melhor.</p>
          <button className="cta">Agendar pelo WhatsApp</button>
          <div className="hero-meta">
            <span>+450 clientes satisfeitas</span>
            <span>★ 4.9 avaliações</span>
          </div>
        </div>
        <div className="hero-image" aria-label="modelo" />
      </section>

      <section className="section light">
        <div className="container">
          <h2>Tecnologia e cuidado para realçar sua beleza</h2>
          <div className="grid-4">
            {treatments.map((item) => (
              <article key={item.title} className="card treatment">
                <div className="thumb" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about container">
        <div className="photo-wide" />
        <div>
          <p className="eyebrow">SOBRE A CLÍNICA</p>
          <h2>Excelência em estética com amor e propósito</h2>
          <p>Somos apaixonados por realçar a beleza natural e promover autoestima através de tratamentos seguros, personalizados e eficazes.</p>
          <div className="mini-grid">
            <span>Atendimento personalizado</span>
            <span>Tecnologia avançada</span>
            <span>Ambiente acolhedor</span>
          </div>
        </div>
        <aside className="aside-card">
          <strong>+ 8 anos</strong>
          <p>de experiência com ética, segurança e excelência.</p>
        </aside>
      </section>

      <section className="section light">
        <div className="container">
          <h2>Por que escolher a Sua Clínica?</h2>
          <div className="grid-5">
            {benefits.map((item) => (
              <article key={item} className="card tiny">
                <h3>{item}</h3>
                <p>Equipe e protocolos de alta performance para resultados reais.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container cta-band">
        <div className="photo-small" />
        <div>
          <h2>Pronta para realçar sua beleza?</h2>
          <p>Agende sua avaliação e descubra o tratamento ideal para você.</p>
          <button className="cta">Agendar pelo WhatsApp</button>
        </div>
        <ul>
          <li>Atendimento humanizado</li>
          <li>Avaliação personalizada</li>
          <li>Resultados que você vê</li>
        </ul>
      </section>

      <section className="section container">
        <h2>Conteúdos para cuidar de você todos os dias</h2>
        <div className="grid-3">
          {posts.map((title) => (
            <article key={title} className="card post">
              <div className="thumb" />
              <h3>{title}</h3>
              <p>10 de Maio de 2024 • 6 min de leitura</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo">Sua Clínica <span>ESTÉTICA AVANÇADA</span></div>
            <p>Realçamos sua beleza natural com segurança, tecnologia e amor.</p>
          </div>
          <div>
            <h4>Links rápidos</h4>
            {navLinks.map((item) => <a key={item} href="#">{item}</a>)}
          </div>
          <div>
            <h4>Contato</h4>
            <p>(11) 99999-9999</p>
            <p>contato@suaclinica.com.br</p>
            <p>Rua das Flores, 123 - São Paulo/SP</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
