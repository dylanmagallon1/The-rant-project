import React from "react";
import styles from "./navBar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    // Imagen
    
    <nav className={styles.nav}> { }
      <Image src="/images/ant_navbar.png" alt="ant" width={80} height={80} className={styles.logo}></Image>
      <div className="nav-links">
        <a href="/">Iniciar Sesión</a>
        <a href="/">Regístrate</a>
      </div>
    </nav>
  );
}
