/** componente diseñado para mostrar toda la información de un post
 * Además de contener los botones para editar y eliminar dicho post.
 * Además, notar que es la vista extendida de InfoCard.
 * Junto con ello,
 * destacar que el bonus de la tarea considera
 * mostrar los comentarios de un post en este componente. */

function PostInfoModal({ post, onClose, author }) {
  return (
    <div className="modal" onClick={onClose}>
      <ul>
        <li key={post.id}>
          <strong>Autor:</strong> {author}
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p style={{ color: "#6d76af" }}>
            #{post.tags.map((tag) => ` ${tag} `)}
          </p>
          <hr />
          <footer>
            <p>{post.reactions.likes} 👍</p>
            <p>{post.reactions.dislikes} 👎</p>
            <p>{post.views} 👀</p>
          </footer>
        </li>
      </ul>
    </div>
  );
}

export default PostInfoModal;
