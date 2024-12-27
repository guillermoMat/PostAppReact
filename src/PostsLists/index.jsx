import "../stylesPosts/index.css"
function MyPostList(props) {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

export default MyPostList
