const { useState: useStateWA, useEffect: useEffectWA, useRef: useRefWA } = React;

function WhatsAppMock({ autoPlay = true }) {
  const script = [
    { from: "them", text: "Hola 👋 soy el asistente de Club Pacheco. ¿En qué te puedo ayudar?", delay: 800 },
    { from: "me",   text: "Hola, quería reservar una cancha de fútbol 5.", delay: 1200 },
    { from: "them", text: "Genial. ¿Para qué día?", delay: 900, options: ["Hoy", "Mañana", "Elegir fecha"] },
    { from: "me",   text: "Mañana a las 20:00.", delay: 1200 },
    { from: "them", text: "Tenemos estas canchas disponibles mañana 20:00 →", delay: 900,
      card: { title: "Cancha 3 · Fútbol 5", sub: "Césped sintético · Iluminación LED", price: "$ 18.000 / hora" } },
    { from: "them", text: "¿Confirmás la reserva?", delay: 300, options: ["Confirmar", "Ver otras canchas"] },
  ];

  const [shown, setShown] = useStateWA(autoPlay ? 1 : script.length);
  const timer = useRefWA(null);

  useEffectWA(() => {
    if (!autoPlay) return;
    if (shown >= script.length) {
      timer.current = setTimeout(() => setShown(1), 4500);
      return () => clearTimeout(timer.current);
    }
    const d = script[shown].delay ?? 900;
    timer.current = setTimeout(() => setShown(s => s + 1), d);
    return () => clearTimeout(timer.current);
  }, [shown, autoPlay]);

  return (
    <div className="wa">
      <div className="wa__header">
        <div className="wa__avatar"><i className="fas fa-futbol"></i></div>
        <div className="wa__title">
          <div>Club Pacheco</div>
          <div className="wa__status"><span className="wa__pulse"></span>online</div>
        </div>
        <i className="fas fa-video"></i>
        <i className="fas fa-phone"></i>
      </div>

      <div className="wa__chat">
        <div className="wa__date">hoy</div>
        {script.slice(0, shown).map((m, i) => (
          <div key={i} className={`wa__msg wa__msg--${m.from}`}>
            <div className="wa__bubble">
              {m.text}
              {m.card && (
                <div className="wa__card">
                  <div className="wa__card-img"><i className="fas fa-futbol"></i></div>
                  <div className="wa__card-body">
                    <div className="wa__card-title">{m.card.title}</div>
                    <div className="wa__card-sub">{m.card.sub}</div>
                    <div className="wa__card-price">{m.card.price}</div>
                  </div>
                </div>
              )}
              <span className="wa__time">
                {new Date().toTimeString().slice(0,5)}
                {m.from === "me" && <i className="fas fa-check-double wa__ticks"></i>}
              </span>
            </div>
            {m.options && (
              <div className="wa__opts">
                {m.options.map(o => <button key={o}>{o}</button>)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="wa__compose">
        <i className="fas fa-smile"></i>
        <div className="wa__input">Escribí un mensaje</div>
        <i className="fas fa-paperclip"></i>
        <div className="wa__send"><i className="fas fa-microphone"></i></div>
      </div>
    </div>
  );
}

window.WhatsAppMock = WhatsAppMock;
