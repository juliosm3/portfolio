import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import js from "../assets/tech/js.svg";
import ts from "../assets/tech/ts.svg";
import react from "../assets/tech/react.svg";
import node from "../assets/tech/node.svg";
import mongo from "../assets/tech/mongo.svg";
import mysql from "../assets/tech/mysql.svg";
import aws from "../assets/tech/aws.svg";

function Technologies({ lang }) {
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    // tamaño de “salto” por click (aprox 1 tarjeta)
    const step = Math.round(el.clientWidth * 0.75);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <motion.section
      id="tecnologias"
      className="tech"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>{lang === "es" ? "Tecnologías" : "Skills"}</h2>

      <p>
        {lang === "es"
          ? "Stack con el que construyo mis proyectos"
          : "Stack I use to build my projects"}
      </p>

      {/* WRAPPER para flechas + scroll móvil */}
      <div className="tech-carousel">
        <button
          className="tech-arrow tech-arrow-left"
          type="button"
          aria-label="Anterior"
          onClick={() => scrollByCards(-1)}
        >
          <ChevronLeft size={22} />
        </button>

        <div
          className="tech-grid tech-scroll"
          ref={trackRef}
          /* opcional: mejora el swipe iOS (no cambia visual) */
          // style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="tech-card">
            <img src={html} alt="HTML" />
            <span>HTML</span>
          </div>

          <div className="tech-card">
            <img src={css} alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="tech-card">
            <img src={js} alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="tech-card">
            <img src={ts} alt="TypeScript" />
            <span>TypeScript</span>
          </div>

          <div className="tech-card">
            <img src={react} alt="React" />
            <span>React</span>
          </div>

          <div className="tech-card">
            <img src={node} alt="Node.js" />
            <span>Node.js</span>
          </div>

          <div className="tech-card">
            <img src={mongo} alt="MongoDB" />
            <span>MongoDB</span>
          </div>

          <div className="tech-card">
            <img src={mysql} alt="MySQL" />
            <span>MySQL</span>
          </div>

          <div className="tech-card">
            <img src={aws} alt="AWS" />
            <span>AWS</span>
          </div>
        </div>

        <button
          className="tech-arrow tech-arrow-right"
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollByCards(1)}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.section>
  );
}

export default Technologies;