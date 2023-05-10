import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]); //pode ser tanto um array de Itarefa quanto um array vazio
  //criar um estado de selecionado, para o cronometor não precisar ter essa responsabilidade:
  const [selecionado, setSelecionado] = useState<Itarefa>();
  //criar uma função em que vamos iterar sobre o tarefas e colocaremos o item selecionado dentro de selecionado.
  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    //estamos pegando o estado antigo dentro do setTarefas e dando um map nele, para ver se a tarefa que estamos iterando é a tarefaselecionada ou não
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      //se a tarefa que estamos iterando é igual ao id da tarefa selecionada, isso significa que ela vai ser a tarefa selecionada
      //? se for true retorna true : e se não for retorna false 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas}/>
      <Lista 
      tarefas = {tarefas}
      selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
