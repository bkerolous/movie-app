import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorite/Favorite";
import Layout from "./Components/Layout/Layout";
import ReadMe from "./Components/ReadMe/ReadMe";
import Details from "./Components/Details/Details";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "favorites", element: <Favorites /> },
        { path: "details/:id/:media_type", element: <Details /> },
        { path: "readme", element: <ReadMe /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
