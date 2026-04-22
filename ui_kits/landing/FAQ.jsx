const { useState: useStateFaq } = React;

function FAQ() {
  const items = [
    { q: "¿Necesito un número nuevo de WhatsApp?",
      a: "No. Usamos el número de WhatsApp Business que ya tenés — tus clientes te contactan igual que siempre. Si todavía no tenés uno, te ayudamos a configurarlo en menos de un día." },
    { q: "¿Cuánto tarda en estar listo?",
      a: "La mayoría de los complejos queda activo en 24 horas. Nos pasás tus canchas, precios y horarios; configuramos el bot; empezás a tomar reservas el mismo día." },
    { q: "¿Qué pasa si el cliente no paga la seña?",
      a: "Vos definís la regla — 1 h, 2 h, 24 h. Si la seña no se confirma a tiempo, el bot libera el slot automáticamente y lo abre al próximo cliente." },
    { q: "¿Puedo seguir tomando reservas por teléfono?",
      a: "Por supuesto. El panel te deja crear reservas manuales junto con las del bot. Todo queda en el mismo calendario." },
    { q: "¿Funciona para pádel, tenis u otros deportes?",
      a: "Sí. BOTines funciona para cualquier complejo que alquile canchas por turnos — fútbol 5/7/11, pádel, tenis, básquet, incluso bowling." },
    { q: "¿Cómo manejan mis datos?",
      a: "Tus datos son tuyos. No compartimos los números de tus clientes con terceros. Hosteado en AWS, backup diario." },
  ];
  const [open, setOpen] = useStateFaq(0);
  return (
    <section className="faq reveal">
      <div className="section__head">
        <div className="eyebrow">Preguntas frecuentes</div>
        <h2 className="section__title">Preguntas resueltas.</h2>
      </div>
      <div className="faq__list">
        {items.map((it, i) => (
          <button
            key={i}
            className={`faq__item ${open === i ? "faq__item--open" : ""}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="faq__q">
              <span>{it.q}</span>
              <i className={`fas ${open === i ? "fa-minus" : "fa-plus"}`}></i>
            </div>
            <div className="faq__a"><p>{it.a}</p></div>
          </button>
        ))}
      </div>
    </section>
  );
}
window.FAQ = FAQ;
