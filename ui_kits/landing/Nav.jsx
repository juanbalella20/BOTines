const { useState } = React;

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio",         "#home"],
    ["Características","#features"],
    ["Precios",        "#pricing"],
    ["Nosotros",       "#about"],
  ];
  return (
    <nav className="nav">
      <a href="#home" className="nav__brand">
        <img src="../../assets/botines-logo.png" alt="BOTines" />
      </a>
      <ul className="nav__links">
        {links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}
      </ul>
      <a href="#contact" className="btn btn--primary nav__cta">
        <i className="fab fa-whatsapp"></i>
        Contactanos
      </a>
      <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
        <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
      </button>
      {open && (
        <div className="nav__mobile">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
            <i className="fab fa-whatsapp"></i> Contactanos
          </a>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;
