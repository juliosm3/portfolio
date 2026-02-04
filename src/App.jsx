import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";


function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "es"
  );

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar dark={dark} setDark={setDark} lang={lang} setLang={setLang} />
      <Hero dark={dark} lang={lang} />
      <Technologies dark={dark} lang={lang} />
      <About dark={dark} lang={lang} />
      <Projects dark={dark} lang={lang} />
      <Contact dark={dark} lang={lang} />
    </div>
  );
}

export default App;