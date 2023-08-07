import RespostaModel from '../model/resposta'
import styles from '../src/styles/Resposta.module.css'

interface RespostaProps {
    valor: RespostaModel,
    indice: number,
    letra: string,
    corFundoLetra: string,
    onResponse: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''

    return (
        <div className={styles.resposta} onClick={() => props.onResponse(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                        style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    {resposta.certa ?
                        (
                            <div className={styles.certa}>
                                <div>A resposta certa é...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        ) :
                        (
                            <div className={styles.errada}>
                                <div>A resposta informada está incorreta...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}