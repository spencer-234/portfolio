import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
};

export default App;
