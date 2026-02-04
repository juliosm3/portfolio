import { Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar({ dark, setDark, lang, setLang }) {
  const [openContact, setOpenContact] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  const toggleLang = () => {
    setLang(prev => (prev === "es" ? "en" : "es"));
  };

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      setOpenContact(false);
      setSent(false);
    }, 1500);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar-glass ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-left">Julio</div>

          <nav className="nav-center">
            <a href="#inicio">{lang === "es" ? "Inicio" : "Home"}</a>

            <a href="#tecnologias">
              {lang === "es" ? "Tecnologías" : "Skills"}
            </a>

            <a href="#sobre-mi">{lang === "es" ? "Sobre mí" : "About"}</a>

            <a href="#proyectos">{lang === "es" ? "Proyectos" : "Projects"}</a>
          </nav>

          <div className="nav-right">
            <button
              className="contact-btn"
              onClick={() => setOpenContact(true)}
            >
              {lang === "es" ? "Contactemos" : "Contact"}
            </button>

            <button
              className="icon-btn"
              onClick={toggleLang}
              aria-label="Cambiar idioma"
            >
              <Globe size={18} />
            </button>

            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {openContact && (
        <div className="contact-modal">
          <div className="contact-box">
            <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>

            <input placeholder={lang === "es" ? "Nombre" : "Name"} />
            <input placeholder={lang === "es" ? "Correo" : "Email"} />
            <input placeholder={lang === "es" ? "Tema" : "Subject"} />
            <textarea placeholder={lang === "es" ? "Mensaje" : "Message"} />

            <button
              className={`send-btn ${sent ? "sent" : ""}`}
              onClick={handleSend}
            >
              {sent
                ? lang === "es"
                  ? "✔ Enviado con éxito"
                  : "✔ Sent!"
                : lang === "es"
                ? "Enviar"
                : "Send"}
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