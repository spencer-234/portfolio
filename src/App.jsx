import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Home from "./sections/Home/Home";

const App = () => {
  return (
    <>
      <Title />
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  )
};

export default App;
