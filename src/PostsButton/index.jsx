//import "./stylesPosts.css"

import "../stylesPosts/index.css"


export function MyNewPost({ setOpenModal, openModal }) {
  return (
    <button
      className="add-button"
      onClick={() => setOpenModal(state => !state)}
    >
      {openModal ? '✖️' : '📝'} {/* Cambia entre X y el ícono de nota */}
    </button>
  );
}


/*onClick
(event) => {
      console.log(event.target)
    }
*/
