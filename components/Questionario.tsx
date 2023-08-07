import QuestaoModel from "../model/questao"
import styles from '../src/styles/Questionario.module.css'
import Botao from "./Botao"
import Questao from "./Questao"


interface QuestionarioPorops {
    questao: QuestaoModel,
    ultima: boolean,
    questaoRespondida: (questao: QuestaoModel) => void
    nextStep: () => void
}

export default function Questionario(props: QuestionarioPorops) {
    function onResponse(indice: number) {
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao valor={props.questao}
                    tempoPraResposta={6}
                    onResponse={onResponse}
                    tempoEsgotado={props.nextStep}
                /> : false
            }

            <Botao onClick={props.nextStep} texto={props.ultima ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}