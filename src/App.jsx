import "./app.scss";
import Title from "./components/Title/Title.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Welcome from "./sections/Welcome/Welcome.jsx";
import About from "./sections/About/About.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { VisibilityContext } from "./VisibilityContext.jsx";

const App = () => {
  const pageRef = useRef(null);
  const { visibility } = useContext(VisibilityContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pageRef.current) {
      return pageRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [scrolled])

  return (
    <>
      <Title />
      <Navbar />
      {!visibility && (
        <main>
          <Welcome setScrolled={setScrolled} />
          {scrolled && (
            <div ref={pageRef}>
              <About />
              <Projects />
              <Skills />
              <Contact />
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default App;
