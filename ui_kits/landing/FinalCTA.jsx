function FinalCTA() {
  return (
    <section className="finalcta reveal" id="contact">
      <div className="finalcta__card">
        <div className="eyebrow eyebrow--light">¿Listo para empezar?</div>
        <h2 className="finalcta__t">Empezá a automatizar tus reservas hoy.</h2>
        <p className="finalcta__s">
          Setup en menos de un día. Sin contratos. Los primeros 14 días son gratis.
        </p>
        <a href="https://wa.me/541134463218" target="_blank" rel="noreferrer" className="btn btn--primary btn--xl">
          <i className="fab fa-whatsapp"></i> Contactanos por WhatsApp
        </a>
        <div className="finalcta__meta">
          <span><i className="fas fa-shield-alt"></i> Garantía de 14 días</span>
          <span><i className="fas fa-bolt"></i> Activo en 24 horas</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <img src="../../assets/botines-logo.png" alt="BOTines" />
          </div>
          <p className="footer__tag">Reservas por WhatsApp para complejos deportivos.</p>
        </div>
        <div>
          <div className="footer__col-t">Producto</div>
          <a href="#features">Características</a>
          <a href="#how">Cómo funciona</a>
          <a href="#pricing">Precios</a>
        </div>
        <div>
          <div className="footer__col-t">Empresa</div>
          <a href="#about">Nosotros</a>
          <a href="#contact">Contacto</a>
        </div>
        <div>
          <div className="footer__col-t">Contactanos</div>
          <a href="https://wa.me/541134463218"><i className="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="mailto:botines.reservas@gmail.com"><i className="far fa-envelope"></i> botines.reservas@gmail.com</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} BOTines · Hecho para dueños de canchas.</span>
        <span className="footer__legal">
          <a href="#">Privacidad</a> · <a href="#">Términos</a>
        </span>
      </div>
    </footer>
  );
}

window.FinalCTA = FinalCTA;
window.Footer = Footer;
