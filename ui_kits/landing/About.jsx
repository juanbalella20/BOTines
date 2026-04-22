function About() {
  return (
    <section className="about reveal" id="about">
      <div className="about__grid">
        <div>
          <div className="eyebrow">Sobre BOTines</div>
          <h2 className="section__title">Hecho para quien maneja la cancha, no el código.</h2>
          <p className="about__p">
            BOTines nació porque los complejos chicos perdían reservas por mensajes sin responder.
            Los dueños están en la cancha — no contestando
            <em> "¿tenés cancha a las 20?" </em>cuarenta veces antes del mediodía.
          </p>
          <p className="about__p">
            Tomamos la herramienta que todos ya usan — WhatsApp — y le enseñamos a manejar
            las reservas de punta a punta. Vos enfocate en el juego; nosotros nos ocupamos del calendario.
          </p>
          <a href="#contact" className="btn btn--outline about__btn">
            Hablá con el equipo <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="about__visual">
          <div className="about__pill about__pill--1">
            <i className="fab fa-whatsapp"></i>
            <div>
              <strong>Nueva reserva</strong>
              <small>Cancha 3 · mañana 20:00</small>
            </div>
          </div>
          <div className="about__pill about__pill--2">
            <i className="fas fa-check"></i>
            <div>
              <strong>Seña confirmada</strong>
              <small>$ 9.000 · +54 11 5555</small>
            </div>
          </div>
          <div className="about__pill about__pill--3">
            <i className="fas fa-calendar-check"></i>
            <div>
              <strong>Slot ocupado</strong>
              <small>Calendario actualizado · 0,8 s</small>
            </div>
          </div>
          <div className="about__bg"></div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
