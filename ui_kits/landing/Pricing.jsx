function Pricing() {
  return (
    <section className="pricing reveal" id="pricing">
      <div className="section__head">
        <div className="eyebrow">Precios</div>
        <h2 className="section__title">Planes simples. Cancelá cuando quieras.</h2>
        <p className="section__sub">Sin costo de setup. Precios en USD · facturación mensual.</p>
      </div>
      <div className="pricing__grid">
        <div className="plan">
          <div className="plan__name">Starter</div>
          <div className="plan__price"><span>$</span>49<small>/mes</small></div>
          <div className="plan__for">Para complejos chicos que recién arrancan.</div>
          <ul className="plan__feats">
            <li><i className="fas fa-check"></i> 1 número de WhatsApp</li>
            <li><i className="fas fa-check"></i> Hasta 3 canchas</li>
            <li><i className="fas fa-check"></i> Calendario en tiempo real</li>
            <li><i className="fas fa-check"></i> Validación de seña</li>
            <li><i className="fas fa-check"></i> Soporte por email</li>
          </ul>
          <a href="#contact" className="btn btn--outline btn--block">Empezar ahora</a>
        </div>
        <div className="plan plan--featured">
          <div className="plan__badge">Más elegido</div>
          <div className="plan__name">Pro</div>
          <div className="plan__price"><span>$</span>99<small>/mes</small></div>
          <div className="plan__for">Para clubes con varias canchas o actividades.</div>
          <ul className="plan__feats">
            <li><i className="fas fa-check"></i> Canchas ilimitadas</li>
            <li><i className="fas fa-check"></i> Backoffice multi-operador</li>
            <li><i className="fas fa-check"></i> Métricas y reportes</li>
            <li><i className="fas fa-check"></i> Recordatorios automáticos</li>
            <li><i className="fas fa-check"></i> Soporte prioritario por WhatsApp</li>
          </ul>
          <a href="#contact" className="btn btn--primary btn--block">Empezar ahora</a>
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
