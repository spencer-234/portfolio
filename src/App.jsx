import "./app.scss";
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/portfolio/",
      element: <Home />
    }
  ])
  return <RouterProvider router={router}/>
};

export default App;
