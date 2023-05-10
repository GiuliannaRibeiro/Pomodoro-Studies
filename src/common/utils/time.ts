export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")
    //foi colocado um valor padrão de horas para caso um deles seja nulo, e então retornará 0
    //split pega um caracter e quebra essa string em um array de várias strings 

    //convertemos as horas, minutos e segundos para um número que dê para somar depois
    const horasEmSegundos = Number(horas) * 3600; 
    const minutosEmSegundos = Number(minutos) * 60; 
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}




 