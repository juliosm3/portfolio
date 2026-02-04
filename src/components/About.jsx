import { motion } from "framer-motion";

function About({ lang }) {
  return (
    <motion.section
      id="sobre-mi"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-card">
        <div className="about-left">
          <h2>{lang === "es" ? "Sobre mí" : "About me"}</h2>

          <p>
            {lang === "es"
              ? "Soy desarrollador Full Stack con pasión por crear interfaces modernas, limpias y funcionales. Me gusta cuidar cada detalle visual y de experiencia de usuario."
              : "I am a Full Stack developer passionate about building modern, clean and functional interfaces. I focus on details and user experience."}
          </p>

          <p>
            {lang === "es"
              ? "Trabajo con tecnologías actuales y disfruto creando productos digitales que transmitan profesionalidad."
              : "I work with modern technologies and enjoy creating digital products that feel professional."}
          </p>
        </div>

        <div className="about-right">
          <div className="stat">
            <span>+2</span>
            <p>Años</p>
          </div>
          <div className="stat">
            <span>15+</span>
            <p>Proyectos</p>
          </div>
          <div className="stat">
            <span>100%</span>
            <p>Pasión</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;