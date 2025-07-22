/**
 * Esta es la página principal de su aplicación.
 * Aquí deberán mostrar todas las tarjetas de los posts de la API utilizando paginación.
 * Estas deben estar desplegadas de forma secuencial.
 * Además, debe tener un botón que permita que los usuarios agreguen un nuevo post.
 */

function Posts(isLoggedIn) {
  return (
    <div>
      <h1>Posts</h1>
      {isLoggedIn && <button>Agregar nuevo post</button>}
    </div>
  );
}

export default Posts;
