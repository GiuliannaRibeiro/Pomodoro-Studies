import React from "react";
import { Itarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './form.module.scss';
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
    state = { //reseta o formulário após escrever algo
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){ //essa é a forma de criar uma função dentro de um class component, o react e o HTML se lêem: que ele é um evento de formulário vindo de uma tag formulário do HTML padrão mesmo, essa é a forma de tipar um evento de formulário
        evento.preventDefault(); //vem do JS, e é usado para não recarregar automaticamente a página
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState ({
            tarefa: '',
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id="tarefa"
                    placeholder="O que você deseja estudar?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo 
                </label>
                <input 
                type="time"
                step="1"
                name="tempo"
                value={this.state.tempo}
                onChange={evento => this.setState({...this.state, tempo: evento.target.value})}//sempre que for um time, text, number, email... sempre será  evento.target.value
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;