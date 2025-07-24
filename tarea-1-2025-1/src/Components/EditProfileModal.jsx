// componente utilizado para editar los datos básicos de un usuario.
import { useState } from "react";
import styles from "./EditProfileModal.module.css"; // Asegúrate de tener un archivo CSS para estilos

function EditProfileModal({ setShowModal, data, setData }) {
  const [formData, setFormData] = useState({ ...data });
  console.log("EditProfileModal data:", data);
  console.log("EditProfileModal formData:", formData);

  return (
    <>
      <div className={styles.profile_container}>
        <form className={styles.profile_info}>
          <h2>Editar Perfil</h2>
          <img
            src={formData.image}
            alt="Perfil"
            className={styles.profile_image}
          />
          <input type="file" name="image" />
          <input
            type="text"
            name="firstName"
            placeholder={formData.firstName}
          />
          <input type="text" name="lastName" placeholder={formData.lastName} />
          <input type="email" name="email" placeholder={formData.email} />

          <div className={styles.button_container}>
            <button type="submit">Actualizar</button>
            <button
              className={styles.cancelar}
              type="reset"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfileModal;
