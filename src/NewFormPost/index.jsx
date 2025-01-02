import "./styleFormNewPost.css"

import React from "react";

function NewPostForm({ setOpenModal, addPost }) {//Recibe setOpenModal y addPost como prop en NewPostForm:

  const [newPostValue, setNewPostValue] = React.useState("")

  const on_Change = (event) => { setNewPostValue(event.target.value); }


  //on_Submit llama a addPost con el texto ingresado y luego cierra el modal
  const on_Submit = (event) => {
    event.preventDefault();
    if (newPostValue.trim()) {//.trim() elimina los espacios en blanco al inicio y al final de una cadena de texto
      addPost(newPostValue); // Llama a la función para agregar el nuevo post
      setOpenModal(false); // Cierra el modal al guardar el poste
    } else {
      alert("El post no puede estar vacío");
    }
  }

  const onCancel = () => { setOpenModal(false) }// Cierra el modal al cancelar

  return (
    <form className="post-form" onSubmit={on_Submit}>
      <label >Escribe tu nuevo Post:</label>
      <textarea
        placeholder="Escribe algo interesante..."
        required
        value={newPostValue}
        onChange={on_Change}
      ></textarea>
      <div className="form-buttons">
        <button
          type="button"
          onClick={onCancel}
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
