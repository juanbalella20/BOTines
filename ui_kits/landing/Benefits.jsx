function Benefits() {
  const items = [
    { icon: "fa-calendar-times", title: "No pierdas más reservas por mensajes sin responder",
      desc: "El bot contesta en segundos, de día y de noche. Sin chats olvidados, sin horarios que se escapan." },
    { icon: "fa-hourglass-half", title: "Recuperá tus horas",
      desc: "Dejá de contestar cuarenta veces \"¿tenés cancha a las 20?\" — dejá que el bot maneje la disponibilidad." },
    { icon: "fa-chart-line",     title: "Llená más horarios vacíos",
      desc: "Recordatorios automáticos, lista de espera y ofertas off-peak convierten horas muertas en reservas pagas." },
    { icon: "fa-heart",          title: "Clientes más contentos",
      desc: "Respuestas al toque, sin formularios, sin apps. Reservas confirmadas en el chat que ya usan." },
  ];
  return (
    <section className="benefits reveal">
      <div className="section__head">
        <div className="eyebrow">Por qué funciona</div>
        <h2 className="section__title">Impacto real en tu negocio.</h2>
        <p className="section__sub">
          Pensado para las métricas que de verdad importan en un complejo deportivo.
        </p>
      </div>
      <div className="benefits__grid">
        {items.map(b => (
          <div className="benefit" key={b.title}>
            <div className="benefit__ic"><i className={`fas ${b.icon}`}></i></div>
            <h3 className="benefit__t">{b.title}</h3>
            <p className="benefit__d">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Benefits = Benefits;
