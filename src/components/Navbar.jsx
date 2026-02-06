import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar({ dark, setDark, lang, setLang }) {
  const [openContact, setOpenContact] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => setDark(p => !p);
  const toggleLang = () => setLang(p => (p === "es" ? "en" : "es"));

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
          <div className="nav-left">Julio</div>

          <nav className="nav-center">
            <a href="#inicio">Inicio</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
          </nav>

          <div className="nav-right">
            <button className="contact-btn" onClick={() => setOpenContact(true)}>
              {lang === "es" ? "Contactemos" : "Contact"}
            </button>

            <button className="icon-btn" onClick={toggleLang}>
              <Globe size={18} />
            </button>

            <button className="icon-btn" onClick={toggleTheme}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Burger solo móvil */}
            <button
              className="burger-btn"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <button
          className="close-mobile"
          onClick={() => setMobileOpen(false)}
        >
          <X size={28} />
        </button>

        <a href="#inicio" onClick={() => setMobileOpen(false)}>Inicio</a>
        <a href="#tecnologias" onClick={() => setMobileOpen(false)}>Tecnologías</a>
        <a href="#sobre-mi" onClick={() => setMobileOpen(false)}>Sobre mí</a>
        <a href="#proyectos" onClick={() => setMobileOpen(false)}>Proyectos</a>
      </div>

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