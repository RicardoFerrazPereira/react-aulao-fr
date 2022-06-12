import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({tarefas}) => {

    return (
        <>
            {tarefas.map(tarefa => <Tarefa />)}
        </>

    )

};

export default Tarefas;