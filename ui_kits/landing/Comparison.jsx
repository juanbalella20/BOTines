function Comparison() {
  const rows = [
    {
      others: "Tu cliente tiene que bajarse otra app",
      us: "Tu cliente reserva por WhatsApp, que ya usa todos los días",
    },
    {
      others: "Los jugadores son clientes de la plataforma, no tuyos",
      us: "La relación es tuya: el número de tus clientes te queda a vos",
    },
    {
      others: "Apps con caídas y problemas técnicos reportados",
      us: "Corre sobre WhatsApp: la plataforma de mensajería más confiable del mundo",
    },
    {
      others: "Plataformas complejas de configurar",
      us: "Onboarding en menos de 24 horas",
    },
    {
      others: "Sistemas difíciles de aprender para vos y tu equipo",
      us: "Interfaz simple e intuitiva, sin curva de aprendizaje",
    },
  ];
  return (
    <section className="compare reveal" id="comparison">
      <div className="section__head">
        <div className="eyebrow">Por qué Botines</div>
        <h2 className="section__title">Lo que ofrecen otros vs. lo que hacemos nosotros.</h2>
        <p className="section__sub">
          Comparalo vos mismo. La diferencia se nota desde el primer día.
        </p>
      </div>
      <div className="compare__table">
        <div className="compare__head">
          <div className="compare__col-h compare__col-h--others">
            <i className="fas fa-times-circle"></i>
            <span>Otros servicios</span>
          </div>
          <div className="compare__col-h compare__col-h--us">
            <i className="fas fa-check-circle"></i>
            <span>Botines</span>
          </div>
        </div>
        <div className="compare__rows">
          {rows.map((r, i) => (
            <div className="compare__row" key={i}>
              <div className="compare__cell compare__cell--others">
                <i className="fas fa-times"></i>
                <p>{r.others}</p>
              </div>
              <div className="compare__cell compare__cell--us">
                <i className="fas fa-check"></i>
                <p>{r.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="compare__kicker">
        Con <strong>Botines</strong>, la relación es entre vos y tu cliente. <em>Directa.</em> Sin intermediarios.
      </p>
    </section>
  );
}
window.Comparison = Comparison;
