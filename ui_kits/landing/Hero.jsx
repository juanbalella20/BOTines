function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">Para dueños de complejos deportivos</div>
          <h1 className="hero__title">
            Automatizá las reservas de tus canchas <span className="hero__accent">por WhatsApp</span>.
          </h1>
          <p className="hero__sub">
            Tus clientes reservan en segundos, desde el chat que ya usan todos los días.
            Ahorrá horas por semana, no pierdas más reservas y llená los horarios vacíos.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary btn--lg">
              Empezar ahora <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#how" className="btn btn--ghost btn--lg">
              <i className="fas fa-play-circle"></i> Ver cómo funciona
            </a>
          </div>
          <ul className="hero__trust">
            <li><i className="fas fa-check"></i> Sin apps que descargar</li>
            <li><i className="fas fa-check"></i> Listo en menos de 24 h</li>
            <li><i className="fas fa-check"></i> Funciona en cualquier celular</li>
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__phone">
            <WhatsAppMock />
          </div>
          <div className="hero__badge hero__badge--1">
            <i className="fas fa-bolt"></i>
            <div>
              <div className="hero__badge-n">&lt; 3s</div>
              <div className="hero__badge-l">en responder</div>
            </div>
          </div>
          <div className="hero__badge hero__badge--2">
            <i className="fas fa-calendar-check"></i>
            <div>
              <div className="hero__badge-n">24/7</div>
              <div className="hero__badge-l">siempre activo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
