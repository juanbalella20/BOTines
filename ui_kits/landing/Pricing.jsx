function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "50.000",
      for: "Para complejos con pocos requirimientos.",
      feats: [
        "1 número de WhatsApp",
        "Hasta 3 canchas",
        "Panel de gestión completo",
        "Calendario en tiempo real",
        "Validación de seña",
        "Soporte por WhatsApp",
      ],
      cta: "Empezar ahora",
      featured: false,
    },
    {
      name: "Pro",
      price: "70.000",
      for: "Para clubes con buen volumen de reservas.",
      feats: [
        "1 número de WhatsApp",
        "Hasta 6 canchas",
        "Panel de gestión completo",
        "Recordatorios automáticos de turno",
        "Reportes y métricas",
        "Soporte prioritario por WhatsApp",
      ],
      cta: "Empezar ahora",
      featured: true,
      badge: "Más elegido",
    },
    {
      name: "Elite",
      price: "95.000",
      for: "Para los que quieren escalar sin límites.",
      feats: [
        "Hasta 10 canchas",
        "Todo lo del plan Pro",
        "Reportes exportables (Excel)",
        "Panel de gestión multi-operador",
        "Soporte premium (videollamada)",
      ],
      cta: "Empezar ahora",
      featured: false,
    },
  ];

  const extras = [
    {
      name: "Complejo adicional",
      desc: "Otro número de WhatsApp con el mismo panel de gestión unificado.",
      price: "+$25.000/mes",
    },
    {
      name: "Módulo Actividades",
      desc: "Gestión de escuelitas, clases y otras actividades. 100% personalizable. Sin límites de actividades. ",
      price: "+$20.000/mes",
    },
    {
      name: "Pagos online",
      desc: "Integración con MercadoPago para cobrar la seña al reservar.",
      price: "+$15.000/mes",
    },
    {
      name: "Recordatorios de reserva",
      desc: "Se pide confirmación a tus clientes una hora antes de su reserva para evitar cancelaciones inesperadas.",
      price: "+$10.000/mes",
    },
  ];

  return (
    <section className="pricing reveal" id="pricing">
      <div className="section__head">
        <div className="eyebrow">Precios</div>
        <h2 className="section__title">Planes simples. Cancelá cuando quieras.</h2>
        <p className="section__sub">Sin costo de setup · Precios en ARS · Facturación mensual.</p>
        <p className="section__sub">Los primeros 15 días son gratis. Sin tarjeta. Cancelá cuando quieras.</p>

      </div>

      <div className="pricing__grid pricing__grid--3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan${plan.featured ? " plan--featured" : ""}`}
          >
            {plan.badge && <div className="plan__badge">{plan.badge}</div>}
            <div className="plan__name">{plan.name}</div>
            <div className="plan__price">
              <span>$</span>{plan.price}<small>/mes</small>
            </div>
            <div className="plan__for">{plan.for}</div>
            <ul className="plan__feats">
              {plan.feats.map((f) => (
                <li key={f}><i className="fas fa-check"></i> {f}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn btn--block${plan.featured ? " btn--primary" : " btn--outline"}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="extras reveal">
        <div className="extras__head">
          <div className="eyebrow">Módulos adicionales</div>
          <p className="extras__sub">Sumá solo lo que necesitás, cuando lo necesitás.</p>
        </div>
        <div className="extras__grid">
          {extras.map((ex) => (
            <div className="extra" key={ex.name}>
              <div className="extra__info">
                <strong className="extra__name">{ex.name}</strong>
                <p className="extra__desc">{ex.desc}</p>
              </div>
              <div className="extra__price">{ex.price}</div>
            </div>
          ))}
        </div>
        <p className="extras__note">
          ¿Más de 10 canchas o necesidades especiales?{" "}
          <a href="#contact" className="extras__link">Hablemos →</a>
        </p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
