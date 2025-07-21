/**
 * Esta es la landing page
 * Aquí deberán colocar un mensaje de bienvenida a su página
 * y mencionar que cosas puede hacer un usuario.
 */
import Navbar from "../Components/Navbar";
import styles from "./Index.module.css"; // Asegúrate de tener un archivo CSS para estilos

function Index() {
  return (
    <>
      <h1 className={styles.title}>¡Bienvenido a Tarea 1!</h1>
    </>
  );
}

export default Index;
