const { useState: useStateTw, useEffect: useEffectTw } = React;

function Tweaks({ defaults }) {
  const [active, setActive] = useStateTw(false);
  const [state, setState]   = useStateTw(defaults);

  // Edit-mode protocol — register listener first, then announce
  useEffectTw(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode")   setActive(true);
      if (e.data?.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Apply tweaks to live CSS + DOM — skip initial-defaults pass to avoid overwriting JSX
  const didMount = React.useRef(false);
  useEffectTw(() => {
    const root = document.documentElement;
    root.style.setProperty("--olive", state.primaryColor);
    root.style.setProperty("--cream", state.bgColor);

    // derive olive-dark / olive-deep from primary via HSL shift (approx)
    const hex = state.primaryColor.replace("#", "");
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    const darker = (amt) => {
      const f = 1 - amt;
      return `rgb(${Math.round(r*f)}, ${Math.round(g*f)}, ${Math.round(b*f)})`;
    };
    root.style.setProperty("--olive-dark", darker(0.18));
    root.style.setProperty("--olive-deep", darker(0.34));
    root.style.setProperty("--olive-soft", `rgba(${r}, ${g}, ${b}, 0.18)`);

    // Skip copy mutation on the initial mount — JSX already rendered the defaults.
    if (!didMount.current) { didMount.current = true; return; }

    // Update hero title, preserving the "through WhatsApp" accent
    const heroTitle = document.querySelector(".hero__title");
    if (heroTitle) {
      const m = state.heroTitle.match(/(through WhatsApp|por WhatsApp)/i);
      if (m) {
        // Strip the accent phrase + any surrounding spaces/periods
        const before = state.heroTitle
          .replace(m[0], "|||")
          .split("|||")[0]
          .replace(/[\s.]+$/, "")
          .trim();
        heroTitle.innerHTML = `${before} <span class="hero__accent">${m[0]}</span>.`;
      } else {
        heroTitle.textContent = state.heroTitle.replace(/\s*\.\s*$/, "") + ".";
      }
    }

    // Update primary CTA labels (leave the trailing arrow icon intact)
    document.querySelectorAll(".hero__ctas .btn--primary").forEach(b => {
      if (b.childNodes[0] && b.childNodes[0].nodeType === 3) {
        b.childNodes[0].textContent = state.ctaText + " ";
      }
    });
  }, [state]);

  const setKey = (k, v) => {
    setState(s => {
      const next = { ...s, [k]: v };
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
      return next;
    });
  };

  if (!active) return null;

  const palettes = [
    { name: "Olive",   primary: "#7E8C54", bg: "#EDE8D0" },
    { name: "Forest",  primary: "#2D5F3F", bg: "#F0EFE6" },
    { name: "Clay",    primary: "#B8644A", bg: "#F5EFE6" },
    { name: "Slate",   primary: "#3F4A5B", bg: "#ECEEF2" },
    { name: "WhatsApp",primary: "#128C7E", bg: "#F0EFE9" },
    { name: "Charcoal",primary: "#1F2937", bg: "#F1EFE8" },
  ];

  return (
    <div className="tweaks">
      <div className="tweaks__head">
        <i className="fas fa-sliders-h"></i> Tweaks
      </div>
      <div className="tweaks__body">
        <div className="tweaks__row">
          <label>Palette</label>
          <div className="tweaks__swatches">
            {palettes.map(p => (
              <button
                key={p.name}
                title={p.name}
                className={`tweaks__sw ${state.primaryColor === p.primary ? "tweaks__sw--on" : ""}`}
                style={{ background: `linear-gradient(135deg, ${p.primary} 50%, ${p.bg} 50%)` }}
                onClick={() => { setKey("primaryColor", p.primary); setKey("bgColor", p.bg); }}
              />
            ))}
          </div>
        </div>

        <div className="tweaks__row">
          <label>CTA text</label>
          <input
            type="text"
            value={state.ctaText}
            onChange={e => setKey("ctaText", e.target.value)}
          />
        </div>

        <div className="tweaks__row">
          <label>Hero headline</label>
          <input
            type="text"
            value={state.heroTitle}
            onChange={e => setKey("heroTitle", e.target.value)}
          />
        </div>

        <div className="tweaks__row" style={{fontSize: 11, color: "var(--ink-4)", marginTop: 4}}>
          Changes persist to disk — reload to confirm.
        </div>
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
