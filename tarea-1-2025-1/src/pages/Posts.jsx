/**
 * Esta es la página principal de su aplicación.
 * Aquí deberán mostrar todas las tarjetas de los posts de la API utilizando paginación.
 * Estas deben estar desplegadas de forma secuencial.
 * Además, debe tener un botón que permita que los usuarios agreguen un nuevo post.
 */

import { useState, useEffect } from "react";
import styles from "./Posts.module.css"; // Asegúrate de tener un archivo CSS para estilos
import axios from "axios";
import InfoCard from "../Components/InfoCard";

function Posts() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true); // En caso de querer mostrar Esqueleto de carga
  const [error, setError] = useState(null);
  const url = "https://dummyjson.com/posts?limit=50&skip=";
  const urlUsers = "https://dummyjson.com/users?limit=208&skip="; // Son 208 usuarios en total que se pueden obtener
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setModalOpen(true); // Abrir un Modal
  };

  const fetchPosts = async (skip = 0) => {
    if (skip > 252 || skip < 0) {
      setSkip(0); // Reinicia el skip si se supera el límite
      return; // Evita hacer más solicitudes si ya se han cargado todos los posts
    }
    try {
      const response = await axios.get(url + skip);
      setPosts(response.data.posts);
      setLoading(false);
      console.log("Posts fetched:", response.data);
    } catch (err) {
      setError("Error al cargar los posts. Intenta nuevamente.");
      console.error("Error al cargar los posts:", error);
      console.error("Error al cargar los posts:", err);
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(urlUsers);

      // Convertimos el array de usuarios en un objeto { id: username }
      const UsersData = response.data.users.reduce((acc, user) => {
        acc[user.id] = user.firstName + " " + user.lastName; // Combina nombre y apellido
        return acc;
      }, {});

      setUsers(UsersData);
    } catch (err) {
      console.error("Error al cargar el usuario:", error);
      console.error("Error al cargar el usuario:", err);
    }
  };

  useEffect(() => {
    // Simulación de verificación de sesión
    const session = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(session === "true");
    if (session === "true") {
      fetchPosts();
      fetchUsers();
    }
  }, []);

  return (
    <div className={styles.post_container}>
      <div className={styles.post_add}>
        {isLoggedIn && <button className={styles.add_button}>+</button>}
        <p style={{ fontWeight: "lighter" }}>¿Que quieres compartir?</p>
      </div>
      <div className={styles.scroll_container}>
        <button
          onClick={() => {
            setPage(page - 1);
            setSkip(skip - 50);
            fetchPosts(skip - 50);
          }}
          disabled={page <= 1}
        >
          Anterior
        </button>
        <p>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
            setSkip(skip + 50);
            fetchPosts(skip + 50);
          }}
          disabled={page >= 6} // Asumiendo que hay 300 posts y cada página muestra 50
        >
          Siguiente
        </button>
      </div>
      <div className={styles.post_list}>
        {posts.map((post) => (
          <InfoCard
            key={post.id}
            title={post.title}
            body={post.body}
            author={users[post.userId] || "Desconocido"}
            tags={post.tags}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            image={post.image}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>
      {page < 6 && (
        <button
          className={styles.load_more}
          onClick={() => {
            setSkip(skip + 50);
            fetchPosts(skip + 50);
            setPage(page + 1);
          }}
        >
          Cargar más
        </button>
      )}
    </div>
  );
}

export default Posts;
