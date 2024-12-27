
export function MyItemPost(props) {
  return (

    <li>
      <span
        className={`check-icon ${props.completed ? "completed" : "not-completed"}`}
        title="Completar Post"
        onClick={props.onComplete}
      >
        &#10003;
      </span>
      <p className="parrafoPost">{props.text}</p>
      <span className="delete-icon" title="Borrar Post" onClick={props.onDelete}
      >&#10005;</span>
    </li>

  )
}
