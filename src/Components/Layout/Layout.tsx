import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import { useState } from "react";

const Layout = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <NavBar {...(isHome ? { setSearch } : {})} />
      <Outlet context={{ search }} />
      <Footer />
    </>
  );
};

export default Layout;
