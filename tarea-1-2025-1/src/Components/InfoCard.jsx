/**
 * Este componente se encarga de mostrar la información
 * detallada de un post, hasta un límite de 3 líneas de contenido.
 */
import styles from "./InfoCard.module.css"; // Asegúrate de tener un archivo CSS para estilos

function InfoCard({
  id,
  username,
  title,
  body,
  author,
  tags,
  likes,
  dislikes,
  views,
  image,
}) {
  return (
    <div className={styles.post_card}>
      <ul>
        <li key={id}>
          <strong>Autor:</strong> {username}
          <p className={styles.post_title}>{title}</p>
          <p>{body}</p>
          <p style={{ color: "#6d76af" }}>#{tags.map((tag) => ` ${tag} `)}</p>
          <hr />
          <footer>
            <p>{likes} 👍</p>
            <p>{dislikes} 👎</p>
            <p>{views} 👀</p>
          </footer>
        </li>
      </ul>
    </div>
  );
}

export default InfoCard;
