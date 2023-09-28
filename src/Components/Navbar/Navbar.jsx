import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.links}>
          <FontAwesomeIcon className={styles.logo} icon={faBook} />{" "}
          <span className={styles.logo}>Library.</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
