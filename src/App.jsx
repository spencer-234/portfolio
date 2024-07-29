import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";


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
