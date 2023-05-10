import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
    selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}: 
    Props) {
        const [tempo, setTempo] = useState<number>();
        //que verifica a presença de selecionado?.tempo e, em caso positivo, 
        //passaremos tempoParaSegundos(seleciado.tempo) para dentro de setTempo().
        if(selecionado?.tempo) { 
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
        
        
    )
}