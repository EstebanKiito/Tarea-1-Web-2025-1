/**
 * Componente que permite la navegación entre las
 * distintas vistas de la aplicación.
 * Deberán considerar que esta Navbar se modifica
 * según un usuario haya iniciado sesión o no.
 */
import React from "react";
import "./styles.css"; // Asegúrate de tener un archivo CSS para estilos
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav>
      <ul>
        <li id="inicio">
          <a href="/">Conecta2</a>
        </li>
        <div className="nav-links">
          {isLoggedIn && (
            <li id="perfil">
              <a href="/profile">Mi Perfil</a>
            </li>
          )}
          {isLoggedIn && (
            <li id="perfil">
              <a href="/profile">Posts</a>
            </li>
          )}
          {isLoggedIn && (
            <li id="perfil">
              <a href="/profile">Cerrar Sesión</a>
            </li>
          )}
          {!isLoggedIn && (
            <li id="login">
              <a href="/login">Iniciar Sesión</a>
            </li>
          )}
          {!isLoggedIn && (
            <li id="register">
              <a href="/register">Registrarse</a>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
