function DashboardMock() {
  return (
    <section className="dashboard reveal" id="dashboard">
      <div className="section__head">
        <div className="eyebrow">Panel de administración</div>
        <h2 className="section__title">Tu calendario en tiempo real, siempre actualizado.</h2>
        <p className="section__sub">
          Cada reserva tomada por el bot aparece al instante. Nada se pierde, nada se duplica.
        </p>
      </div>

      <div className="dashboard__stage">
        {/* Monitor */}
        <div className="monitor">
          <div className="monitor__bezel">
            <div className="monitor__screen">
              <img
                src="calendar-preview.png"
                alt="Panel de administración BOTines — vista de calendario semanal"
                className="monitor__img"
              />
            </div>
          </div>
          <div className="monitor__neck"></div>
          <div className="monitor__foot"></div>
        </div>

        {/* Floating badges */}
        <div className="dashboard__chip dashboard__chip--1">
          <i className="fas fa-sync-alt"></i>
          <span>Actualización en tiempo real</span>
        </div>
        <div className="dashboard__chip dashboard__chip--2">
          <i className="fas fa-shield-alt"></i>
          <span>Sin reservas duplicadas</span>
        </div>
        <div className="dashboard__chip dashboard__chip--3">
          <i className="fas fa-users"></i>
          <span>Multi-cancha y multi-usuario</span>
        </div>
      </div>
    </section>
  );
}
window.DashboardMock = DashboardMock;
