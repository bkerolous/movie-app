import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { MdLocalMovies } from "react-icons/md";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const startPage = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`${style.footer}`}>
        <div className={`${style.logo}`}>
          <Link onClick={startPage} className={`${style.link}`} to="./">
            MovieDex
          </Link>
        </div>
        <div className={`${style.icon}`}>
          <MdLocalMovies className={`${style["icon-item"]}`} />
          <FaFacebook className={`${style["icon-item"]}`} />
          <FaTwitterSquare className={`${style["icon-item"]}`} />
          <IoLogoWhatsapp className={`${style["icon-item"]}`} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Support</th>
              <th>Company</th>
              <th>Legal</th>
              <th>Join Us</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Footer;
