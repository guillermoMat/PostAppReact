import "./styleFormNewPost.css"
import App from "../App/index"
import React from "react";

function NewPostForm() {

  return (
    <form className="post-form" onSubmit={(event) => { event.preventDefault() }}>
      <label >Escribe tu nuevo Post:</label>
      <textarea
        placeholder="Escribe algo interesante..."
      ></textarea>
      <div className="form-buttons">
        <button
          type="button"

          className="cancel-button"
        >
          Cancelar
        </button>
        <button type="submit" className="add-post">
          Añadir
        </button>
      </div>
    </form>
  )
}

export default NewPostForm
