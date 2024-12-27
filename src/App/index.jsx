import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { AppAbs } from "./AppAbstract"

const myListPost = [
  { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ipsa mollitia?", completed: true },
  { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorum.", completed: false },
  { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, necessitatibus.", completed: true },
  { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quo!", completed: false },
  { text: "Adipisicing elit. Laborum, necessitatibus.", completed: true },
]



function App() {
  const [textSearch, setTextSearch] = useState("");//elementos para MySearchPost
  const [stateList, setStatelist] = useState(myListPost);
  const postCompletados = stateList.filter(IPost => IPost.completed).length;//elemento para MyCounterPost
  const totalPosts = stateList.length;
  const [openModal, setOpenModal] = useState(false);//elemento para openModal para utilizar Portals

  //filtrar lista
  const postFilter = stateList.filter(
    (post) => {
      const texto = post.text.toLocaleLowerCase();
      const textoABuscar = textSearch.toLocaleLowerCase()

      return texto.includes(textoABuscar);
    }
  );

  //add post
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completePost = (text) => {
    const newPost = [...stateList];//myListPost
    const indexPost = newPost.findIndex((element) => {
      return element.text === text;
    });
    // Verificamos si el elemento fue encontrado
    if (indexPost !== -1) {
      newPost[indexPost].completed = true;
      setStatelist(newPost);
    } else {
      console.error(`No se encontró el post con texto: ${text}`);
    }
  }

  const deletePost = (text) => {
    // const newPost = [...myListPost];
    // const indexPost = newPost.findIndex((element) => element.text == text);

    // newPost.splice(indexPost, 1);
    // setStatelist(newPost);
    const newPost = stateList.filter((element) => element.text !== text); // Mejor usar filter
    setStatelist(newPost);

  }


  return (
    <AppAbs

      postCompletados={postCompletados}
      totalPosts={totalPosts}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
      postFilter={postFilter}
      completePost={completePost}
      deletePost={deletePost}
      openModal={openModal}
      setOpenModal={setOpenModal}

    >
    </AppAbs>
  )
}

export default App

