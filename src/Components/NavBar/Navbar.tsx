import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import style from "./Navbar.module.scss";
import { useState } from "react";

interface NavBarProps {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = ({ setSearch }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menueState = () => setIsOpen((prev) => !prev);

  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <Link className={style.link} to="./">
          Trending Movies
        </Link>
      </div>

      {setSearch && (
        <div className={style.search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search By Name"
          />
        </div>
      )}

      <ul className={style["nav-right"]}>
        <li>
          <Link className={style.link} to="./">
            Home
          </Link>
        </li>
        <li>
          <Link className={style.link} to="./favorites">
            Favorite List
          </Link>
        </li>
      </ul>

      <FaBars className={style["menu-bar"]} onClick={menueState} />

      {isOpen && (
        <div className={style.mobileMenu}>
          <ul className={style['nav-right-mobile']}>
            <li>
              <Link className={style.link} to="./">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.link} to="./favorites">
                Favorite List
              </Link>
            </li>
          <li>
            
            {setSearch && (
            <div className={style['mobileMenu-search']}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search By Name"
              />
            </div>
          )}

          </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
