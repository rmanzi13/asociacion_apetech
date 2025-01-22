import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Inicio</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/webinar" style={styles.navLink}>Webinars</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/noticias" style={styles.navLink}>Noticias</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contacto" style={styles.navLink}>Contacto</Link>
        </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#003366",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
};

export default Navbar;
