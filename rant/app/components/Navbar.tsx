"use client"
import { useEffect, useRef } from "react";
import styles from "./navBar.module.css";
import Image from "next/image";

export default function Navbar() {

  const referenciaMenu = useRef<HTMLDivElement>(null)
  const handleClickBars = () => {
    if (referenciaMenu.current) {
      const obtenerEstiloMenu = getComputedStyle(referenciaMenu.current);
      if (obtenerEstiloMenu.display === 'flex') {
        referenciaMenu.current.style.display = 'none';
      } else {
        console.log('none');
        referenciaMenu.current.style.display = 'flex';
      }
    }
  }
  return (

    // Div nav
    <nav className={styles.nav}>

      <div className={styles.nav_container_first_part}>
        <button onClick={handleClickBars}><i className="fa fa-bars"></i></button>
        <Image
          src="/images/ant_navbar.png"
          alt="Logo de la aplicación web de rant"
          width={80}
          height={80}
          className={styles.logo}>
        </Image>
        <span>Rant</span>
      </div>

      <div className={styles.nav_container_second_part}>
        <a href="/" aria-label="Iniciar sesión"><span>Iniciar sesión</span></a>
        <a href="/" aria-label="Registrarme"><span>Registrarme</span></a>
      </div>

      <div ref={referenciaMenu} className={styles.referenciaMenu}>
        <ul>
          <li><a href="/">Iniciar sesión</a></li>
          <li><a href="/">Registrarme</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
      </div>

    </nav>

  );
}