import QuestaoModel from "../model/questao"
import styles from '../src/styles/Questao.module.css'
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

const letras = [
    { valor: 'A', cor: '#fc9905' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE516' },
]

interface QuestaoProps {
    valor: QuestaoModel,
    tempoPraResposta?: number
    onResponse: (indice: number) => void,
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, index) => {
            return <Resposta
                key={`${questao.id}-${index}`}
                valor={resposta}
                indice={index}
                letra={letras[index].valor}
                corFundoLetra={letras[index].cor}
                onResponse={props.onResponse}
            />
        })
    }
    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado} />
            {renderizarRespostas()}
        </div>
    )
}