import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, MessageCircle } from "lucide-react";
import foto from "../assets/julio.jpg";

function Hero({ dark, lang }) {
  return (
    <section
      id="inicio"
      className={`hero ${dark ? "dark-mode" : "light-mode"}`}
      style={{
        position: "relative",
        padding: "4rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        minHeight: "80vh",
        backgroundColor: dark ? "#1a1a1a" : "#ffffff",
        color: dark ? "#f9f9f9" : "#1e293b",
      }}
    >
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img src={foto} alt="Foto de Julio" />

        <div className="hero-social">
          <a href="https://www.linkedin.com/in/juliosuarezmartinez/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://github.com/juliosm3" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://www.instagram.com/juliosuarez3/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="https://wa.me/685564897" target="_blank" rel="noopener noreferrer"><MessageCircle /></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ textAlign: "center" }}
      >

        <h1>{lang === "es" ? "Hola! Soy Julio" : "Hi! I'm Julio"}</h1>

        <p>
          {lang === "es"
            ? "Desarrollador Full Stack"
            : "Full Stack Developer"}
        </p>

        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
          {lang === "es" ? "Mira mi CV" : "View my CV"}
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;