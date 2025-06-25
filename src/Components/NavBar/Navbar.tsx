import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

interface NavBarProps {
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar = ({ setSearch }: NavBarProps) => {
  return (
    <>
      <nav className={`${style.container}`}>
        <div className={`${style.logo}`}>
          <Link className={`${style.link}`} to="./">
            Tranding Movies
          </Link>
        </div>
        {setSearch && (
          <div className={`${style.search}`}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search By Name"
            />
          </div>
        )}
        <div>
          <ul className={`${style["nav-left"]}`}>
            <li>
              <Link className={`${style.link}`} to="./">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${style.link}`} to="./favorites">
                Favorite List
              </Link>
            </li>
            <li>
              <Link className={`${style.link}`} to="readme">
                Readme
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
