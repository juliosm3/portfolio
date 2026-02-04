import { motion } from "framer-motion";

function Projects({ lang }) {
  return (
    <motion.section
      id="proyectos"
      className="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>
        {lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
      </h2>

      <div
        style={{
          padding: "40px",
          textAlign: "center",
          border: "2px dashed #ccc",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>🚧 {lang === "es" ? "En Construcción" : "Under Construction"} 🚧</h3>
        <p>
          {lang === "es"
            ? "Muy pronto aquí podrás ver mis proyectos realizados con React, Node.js y más."
            : "Soon you’ll see my projects built with React, Node.js and more."}
        </p>
      </div>
    </motion.section>
  );
}

export default Projects;