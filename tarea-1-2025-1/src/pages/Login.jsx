/**
 * Esta página sirve para que una persona pueda iniciar sesión
 * en una de las cuentas ya existentes en la aplicación web.
 * Para efectos prácticos, en esta tarea no se considerará el manejo
 * de crear nuevos usuarios.
 */
import styles from "./Login.module.css"; // Asegúrate de tener un archivo CSS para estilos
function Login() {
  return (
    <>
      <div className={styles.login_container}>
        <form>
          <h2>Iniciar Sesión</h2>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nombre de usuario"
            required
          />
          <label htmlFor="password"></label>
          <input
            typo="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
