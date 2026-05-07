function HowItWorks() {
  const steps = [
    { n: "01", t: "El cliente manda un mensaje por WhatsApp", d: "Escribe al número de tu complejo — sin apps, sin registrarse." },
    { n: "02", t: "El bot responde con opciones",              d: "Botines saluda, muestra precios, y disponibilidad." },
    { n: "03", t: "Elige cancha, día y horario",               d: "La disponibilidad es en vivo. El bot bloquea el slot mientras decide." },
    { n: "04", t: "La reserva queda confirmada",               d: "Llega la notificación, se actualiza el calendario y vos recibís el comprobante." },
  ];
  return (
    <section className="how reveal" id="how">
      <div className="section__head">
        <div className="eyebrow">Cómo funciona</div>
        <h2 className="section__title">Cuatro pasos. Cero trabajo manual.</h2>
      </div>
      <div className="how__track">
        <div className="how__line"></div>
        {steps.map(s => (
          <div className="how__step" key={s.n}>
            <div className="how__num">{s.n}</div>
            <h3 className="how__t">{s.t}</h3>
            <p className="how__d">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
