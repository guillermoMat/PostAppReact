
import React from 'react'

//importanto Archivos POST
import MyCounterPost from "../PostsCounter"
import MyPostList from "../PostsLists"
import MySearchPost from "../PostsSearch"
import { MyItemPost } from "../PostsItem"
import { MyNewPost } from '../PostsButton';
import Modal from "../Modal"
import NewPostForm from "../NewFormPost"


function AppAbs({
  postCompletados, totalPosts,
  textSearch, setTextSearch,
  postFilter,
  completePost, deletePost,
  openModal,
  setOpenModal,
}) {

  return (

    //el React.Fragment lo podes cambiar por uno vacio <></> funciona igual
    <React.Fragment>

      <MyCounterPost completed={postCompletados} total={totalPosts} ></MyCounterPost>
      <MySearchPost textSearch={textSearch} setTextSearch={setTextSearch}></MySearchPost>
      <MyPostList>
        {
          postFilter.map(post => (
            <MyItemPost
              key={post.text}
              text={post.text}
              completed={post.completed}
              onComplete={() => completePost(post.text)}
              onDelete={() => deletePost(post.text)}
            ></MyItemPost>
          ))
        }
      </MyPostList>


      <MyNewPost setOpenModal={setOpenModal} openModal={openModal} />


      {openModal && (//Verificamos el estado, y si esta abierto renderizamos el Modal(componenete), en caso contrario se cierra
        <Modal style={{ zIndex: 200 }} >
          <NewPostForm ></NewPostForm>
        </Modal>
      )
      }


    </React.Fragment>
  )
}

export { AppAbs }
