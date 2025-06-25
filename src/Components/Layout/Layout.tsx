import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import { useState } from "react";
import type { movies } from "../../type/interface";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<movies[]>([]);
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleFavorite = (movie: movies) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === movie.id)
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <>
      <NavBar {...(isHome ?{setSearch} : {})} />
      <Outlet context={{ favorites, toggleFavorite, search }} />
      <Footer />
    </>
  );
};

export default Layout;
