// componente utilizado para editar los datos básicos de un usuario.
import { useState, useEffect } from "react";
import styles from "./EditProfileModal.module.css"; // Asegúrate de tener un archivo CSS para estilos

function EditProfileModal({ setShowModal, data, setData }) {
  const [formData, setFormData] = useState({ ...data });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Crear una URL temporal para mostrar la imagen
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setData(formData);
    localStorage.setItem("userData", JSON.stringify(formData));
    setShowModal(false);
  };

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
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <div className={styles.button_container}>
            <button
              className={styles.actualizar}
              type="submit"
              onClick={handlerSubmit}
            >
              Actualizar
            </button>
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
