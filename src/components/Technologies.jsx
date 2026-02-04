import { motion } from "framer-motion";

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

      <div className="tech-grid">
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
    </motion.section>
  );
}

export default Technologies;