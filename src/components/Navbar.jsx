import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar({ dark, setDark, lang, setLang }) {
  const [openContact, setOpenContact] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => setDark((p) => !p);
  const toggleLang = () => setLang((p) => (p === "es" ? "en" : "es"));

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      setOpenContact(false);
      setSent(false);
    }, 1500);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar-glass ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* IZQUIERDA */}
          <div className="nav-left">Julio</div>

          {/* CENTRO (solo desktop) */}
          <nav className="nav-center">
            <a href="#inicio">Inicio</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
          </nav>

          {/* DERECHA (idioma + tema + contact) */}
          <div className="nav-right">
            <button className="contact-btn" onClick={() => setOpenContact(true)}>
              {lang === "es" ? "Contactemos" : "Contact"}
            </button>

            <button className="icon-btn" onClick={toggleLang} aria-label="Cambiar idioma">
              <Globe size={18} />
            </button>

            <button className="icon-btn" onClick={toggleTheme} aria-label="Cambiar tema">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* BURGER SOLO MÓVIL (FUERA de nav-right para poder anclarlo a la derecha) */}
          <button
            className="burger-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU PREMIUM ===== */}
      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <div className="mobile-panel">
          {/* BOTÓN CERRAR */}
          <button
            className="close-mobile"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={26} />
          </button>

          {/* LINKS */}
          <a href="#inicio" onClick={() => setMobileOpen(false)}>Inicio</a>
          <a href="#tecnologias" onClick={() => setMobileOpen(false)}>Tecnologías</a>
          <a href="#sobre-mi" onClick={() => setMobileOpen(false)}>Sobre mí</a>
          <a href="#proyectos" onClick={() => setMobileOpen(false)}>Proyectos</a>

          {/* BOTONES EXTRA */}
          <div className="mobile-tools">
            <button onClick={toggleLang} aria-label="Cambiar idioma">
              <Globe size={18} />
            </button>

            <button onClick={toggleTheme} aria-label="Cambiar tema">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* CONTACT MODAL */}
      {openContact && (
        <div className="contact-modal">
          <div className="contact-box">
            <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>

            <input placeholder="Nombre" />
            <input placeholder="Correo" />
            <input placeholder="Tema" />
            <textarea placeholder="Mensaje" />

            <button
              className={`send-btn ${sent ? "sent" : ""}`}
              onClick={handleSend}
            >
              {sent ? "✔ Enviado" : "Enviar"}
            </button>

            <button
              className="close-btn"
              onClick={() => setOpenContact(false)}
              aria-label="Cerrar"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;