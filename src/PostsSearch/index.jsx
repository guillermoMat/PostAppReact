import { useState } from "react"
import "../stylesPosts/index.css"


function MySearchPost(props) {
  //console.log(textSearch)

  return (
    <input type="text" placeholder="Buscar algún post" onChange={(e) => {
      props.setTextSearch(e.target.value)
    }} />
  )
}
export default MySearchPost
