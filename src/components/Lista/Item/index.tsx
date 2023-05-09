import { Itarefa } from "../../../types/tarefa";
import style from "../lista.module.scss";

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
  console.log("item atual: ", {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa,
  });
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} //condicional: se ele estiver selecionado retorna tyle.itemSelecionado, e se não estiver retorna nada, uma string vazia
      onClick={() =>
        selecionaTarefa({
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
    </li>
  );
}
