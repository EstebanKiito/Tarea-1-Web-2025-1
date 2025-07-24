/**
 * Esta es la página principal de su aplicación.
 * Aquí deberán mostrar todas las tarjetas de los posts de la API utilizando paginación.
 * Estas deben estar desplegadas de forma secuencial.
 * Además, debe tener un botón que permita que los usuarios agreguen un nuevo post.
 */

import { useState, useEffect } from "react";
import styles from "./Posts.module.css"; // Asegúrate de tener un archivo CSS para estilos
import axios from "axios";

function Posts() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://dummyjson.com/posts";

  const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data.posts);
      setLoading(false);
      console.log("Posts fetched:", response.data.posts);
    } catch (err) {
      setError("Error al cargar los posts. Intenta nuevamente.");
      console.error("Error al cargar los posts:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulación de verificación de sesión
    const session = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(session === "true");
    if (session === "true") {
      fetchPosts();
    }
  }, []);

  const fakePosts = [
    { id: 1, title: "Post 1", content: "Contenido del post 1" },
  ];

  return (
    <div className={styles.post_container}>
      <div className={styles.post_add}>
        {isLoggedIn && (
          <button className={styles.add_button}>Agregar nuevo post</button>
        )}
      </div>
      <div className={styles.post_list}>
        <ul>
          {posts.map((post) => (
            <div className={styles.posts}>
              <li key={post.id}>
                <p className={styles.post_title}>{post.title}</p>
                <p>{post.body}</p>
                <p>
                  <strong>Autor:</strong> {post.userId}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Posts;
