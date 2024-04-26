import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./NavBar.module.css";
import logo from "../../img/uniateneulogo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img className={styles.img} src={logo} alt="uniataneu" />
        </Link>

        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/documentacao">Documentacao</Link>
          </li>
          <li>
            <Link to="/MinhasDocumentacoes">MinhaDocumentacoes</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
