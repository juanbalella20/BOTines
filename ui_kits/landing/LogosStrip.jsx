function LogosStrip() {
  const clubs = [
    "Club Pacheco", "La Redonda", "Complejo San Isidro",
    "Fútbol 5 Palermo", "Pádel Nordelta", "Club del Sur",
  ];
  return (
    <section className="logos reveal">
      <div className="logos__label">Elegido por complejos deportivos de toda Latinoamérica</div>
      <div className="logos__row">
        {[...clubs, ...clubs].map((c, i) => (
          <div className="logos__item" key={i}>
            <i className="fas fa-futbol"></i> {c}
          </div>
        ))}
      </div>
    </section>
  );
}
window.LogosStrip = LogosStrip;
