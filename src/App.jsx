import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About.jsx";
import Title from "./components/Title/Title";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects.jsx";
import { VisibilityContext } from "./context/VisibilityContext.jsx";
import { useContext } from "react";

const App = () => {

  const { visibility } = useContext(VisibilityContext);

  return (
    <>
      <Title />
      {!visibility && (
        <>
          <Navbar />
          <main>
            <Home />
            <About />
            <Projects />
          </main>
        </>
      )}
    </>
  )
};

export default App;
