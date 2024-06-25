import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Home from "./sections/Home/Home";
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
          </main>
        </>
      )}
    </>
  )
};

export default App;
