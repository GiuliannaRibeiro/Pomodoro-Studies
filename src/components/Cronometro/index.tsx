import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      //se existir selecionado.tempo
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);
  //o primeiro parâmetro é uma função, que vai ser executada quando alguma coisa mudar, esse é o primeiro parametro que o useEffect aceita
  //o segundo parametro é um array de dependencias
  //o array de dependencias são todas as dependencias que a gente quer,variaveis que a gente quer,
  //que o useEffect utilize como base para ele executar essa função
  
  function regressiva (contador: number = 0) {
    setTimeout(() => {
        if(contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1)
        }
        finalizarTarefa();
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}> {/* como esse componente é customizado, não espera necessariamente esses defaults, e sim somente o key, então é preciso tipar o onClick*/}
        Começar
      </Botao>
    </div>
  );
}
