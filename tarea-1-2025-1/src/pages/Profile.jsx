/**
 * Página que permite ver la información del usuario
 * y a su vez, permite acceder a la edición de sus datos.
 */

import styles from "./Profile.module.css"; // Asegúrate de tener un archivo CSS para estilos

function Profile({ data }) {
  if (!data) {
    return <p>Cargando perfil...</p>; // o puedes retornar null
  }
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>
        <h2>Mi Perfil</h2>
        <img src={data.image} alt="Perfil" className={styles.profile_image} />
        <p>
          <strong>Nombre:</strong> {data.firstName} {data.lastName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Usuario:</strong> {data.username}
        </p>
        <button type="submit">Editar Perfil</button>
      </div>
    </div>
  );
}

export default Profile;
