import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <figure className={styles.logo_wrapper}>
        <NavLink to="/">
          <img
            className={styles.logo}
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          />
        </NavLink>
      </figure>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <NavLink className={styles.link} to="/mens">
            Men
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink className={styles.link} to="/womens">
            Women
          </NavLink>
        </li>
        {/* <li className={styles.list_item}>
          <a className={styles.link} href="">
            Accessories
          </a>
        </li> */}
      </ul>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a className={styles.link_cart} href="">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
