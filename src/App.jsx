import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  )
};

export default App;
