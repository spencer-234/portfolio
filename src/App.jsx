import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
};

export default App;
