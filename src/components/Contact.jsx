import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, MessageCircle } from "lucide-react";

function Contact({ lang }) {
  return (
    <motion.section
      id="contacto"
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>

      <p>
        {lang === "es"
          ? "¿Quieres hablar de un proyecto o trabajo? Escríbeme:"
          : "Do you want to talk about a project or job? Write me:"}
      </p>

      <form className="contact-form">
        <label>
          {lang === "es" ? "Nombre:" : "Name:"}
          <input type="text" placeholder={lang === "es" ? "Tu nombre" : "Your name"} />
        </label>

        <label>
          Email:
          <input type="email" placeholder={lang === "es" ? "Tu email" : "Your email"} />
        </label>

        <label>
          {lang === "es" ? "Mensaje:" : "Message:"}
          <textarea placeholder={lang === "es" ? "Tu mensaje" : "Your message"} />
        </label>

        <button type="submit">
          {lang === "es" ? "Enviar" : "Send"}
        </button>
      </form>

      <div className="contact-social">
        <a href="https://www.instagram.com/juliosuarez3/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
        <a href="https://github.com/juliosm3" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://www.linkedin.com/in/juliosuarezmartinez/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://wa.me/685564897" target="_blank" rel="noopener noreferrer"><MessageCircle /></a>
      </div>
    </motion.section>
  );
}

export default Contact;