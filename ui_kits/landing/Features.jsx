function Features() {
  const items = [
    { icon: "fa-clock",        title: "Reservas automáticas 24/7",
      desc: "Botines toma reservas de noche, fines de semana y feriados — sin que toques una pantalla." },
    { icon: "fa-calendar-check", title: "Gestión en tiempo real",
      desc: "Cada confirmación aparece al instante en tu panel. Sin reservas duplicadas, sin planillas." },
    { icon: "fa-redo",          title: "Reprogramá y cancelá fácil",
      desc: "Los clientes mueven sus propias reservas desde el chat. Vos definís las reglas." },
    { icon: "fa-shield-alt",    title: "Validación de seña y pagos",
      desc: "Pedí seña, verificala automáticamente y liberá el horario si no se confirma a tiempo." },
    { icon: "fa-th-large",      title: "Panel de administración",
      desc: "Gestioná tus canchas y actividades desde un panel web claro." },
    { icon: "fa-chart-pie",     title: "Métricas del negocio",
      desc: "Mirá horarios pico, tendencias de ingresos y mejores clientes — decidí qué horarios promocionar." },
  ];
  return (
    <section className="features reveal" id="features">
      <div className="section__head">
        <div className="eyebrow">Características</div>
        <h2 className="section__title">Todo lo que tu complejo necesita para funcionar solo.</h2>
        <p className="section__sub">
          Diseñado para dueños. Fácil de usar. 
        </p>
      </div>
      <div className="features__grid">
        {items.map(it => (
          <article className="feature" key={it.title}>
            <div className="feature__ic"><i className={`fas ${it.icon}`}></i></div>
            <h3 className="feature__t">{it.title}</h3>
            <p className="feature__d">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
window.Features = Features;
