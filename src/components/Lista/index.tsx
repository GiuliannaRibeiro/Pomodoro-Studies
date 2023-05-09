import { Itarefa } from '../../types/tarefa';
import Item from './Item'
import style from './lista.module.scss'

interface Props {
    tarefas: Itarefa[],
    //jeito de tipar uma função:
    selecionaTarefa: (tarefaSeleciondada: Itarefa) => void //uma função que espera o chamado tarefaSelecionada e não retorna nada 
}

function Lista({ tarefas, selecionaTarefa }: Props) { //dizer que vai pegar o tarefas e que esse props tem um tarefas que ele é um array de tarefa
//function Lista({ tarefas }: {tarefas: Array<Itarefa>}) também é possivel fazer por este meio 
    return (
        
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                    selecionaTarefa = {selecionaTarefa}
                    key={item.id} //uma forma do react linkar o item no virtual DOM para o DOM real
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;