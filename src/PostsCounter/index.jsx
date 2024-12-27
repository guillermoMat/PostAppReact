//import "./stylesPosts.css"
import "../stylesPosts/index.css"
function MyCounterPost({ completed, total }) {
  return (
    <h1 className="titulo">Tienes {completed} de {total} Posts</h1>
  )
}


export default MyCounterPost
