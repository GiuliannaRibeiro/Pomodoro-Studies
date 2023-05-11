import { Itarefa } from "../../../types/tarefa";
import style from "./item.module.scss";

interface Props extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

export default function item({ //conseguimos exportar a função assim que criamos ela, se não quiser também pode exportar lá em baixo que não faz diferença
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}
      ${completado ? style.itemCompletado : ''}`} //condicional do itemselecionado: se ele estiver selecionado retorna tyle.itemSelecionado, e se não estiver retorna nada, uma string vazia
      onClick={() =>
        !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido}
      aria-label="Tarefa completada" ></span>}
    </li>
  );
}
