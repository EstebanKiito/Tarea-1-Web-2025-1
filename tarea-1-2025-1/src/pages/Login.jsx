/**
 * Esta página sirve para que una persona pueda iniciar sesión
 * en una de las cuentas ya existentes en la aplicación web.
 * Para efectos prácticos, en esta tarea no se considerará el manejo
 * de crear nuevos usuarios.
 */
import styles from "./Login.module.css"; // Asegúrate de tener un archivo CSS para estilos
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, isLoggedIn, setData }) {
  const navigate = useNavigate();
  const url = "'https://dummyjson.com/user/login'";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Aquí podrías agregar la lógica para manejar el inicio de sesión
    console.log("Iniciar sesión con:", username, "&", password);

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      if (!response.data.id) {
        setError("Credenciales incorrectas. Intenta nuevamente.");
        setIsLoggedIn(false);
      }
      const { token, ...userData } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", true);

      setData(userData);
      setIsLoggedIn(true);
      navigate("/posts");
    } catch (err) {
      setError("Credenciales incorrectas. Intenta nuevamente.");
      console.error("Error al iniciar sesión:", error);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <h3>Bienvenid@ {username}!</h3>
      ) : (
        <>
          <div className={styles.login_container}>
            <form>
              <h2>Iniciar Sesión</h2>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Nombre de usuario"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Contraseña"
                required
              />
              <button onClick={handleSubmit} type="submit">
                Entrar
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
