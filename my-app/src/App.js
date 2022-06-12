import React from "react";
import { useState } from "react";
import "./App.css";
import Tarefas from "./components/Tarefas";

const App = () => {
  //let message = "Hello world!";
  const [tarefas, setTarefas] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: false,
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: true,
      }

  ])

  return (
    <>
      <div className='container'>
        <Tarefas tarefas={tarefas} />
      </div>
      
    </>  
  )
}

export default App;