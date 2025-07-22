/**
 * Componente que permite la navegación entre las
 * distintas vistas de la aplicación.
 * Deberán considerar que esta Navbar se modifica
 * según un usuario haya iniciado sesión o no.
 */
import React from "react";
import "./styles.css"; // Asegúrate de tener un archivo CSS para estilos
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Importa el CSS del componente

function Navbar({ isLoggedIn }) {
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo} id="inicio">
        <a href="/">Mi App</a>
      </li>

      {isLoggedIn ? (
        <>
          <li id="perfil">
            <Link to="/profile">Perfil</Link>{" "}
          </li>
          <li id="perfil">
            <Link to="/posts">Posts</Link>
          </li>
          <li id="close-session">
            <a href="/profile">Cerrar Sesión</a>
          </li>
        </>
      ) : (
        <>
          <li className={styles.login} id="login">
            <Link to="/login">Iniciar Sesión</Link>{" "}
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
