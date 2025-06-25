import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorite/Favorite";
import Layout from "./Components/Layout/Layout";
import Details from "./Components/Details/Details";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "favorites", element: <Favorites /> },
        { path: "details/:id/:media_type", element: <Details /> },
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
