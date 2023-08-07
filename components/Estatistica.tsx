import styles from '../src/styles/Estatistica.module.css'

interface EstatisticaProps {
    valor: any,
    texto: string,
    background?: string,
    color?: string
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.background ?? '#F6BE00',
                color: props.color ?? '#333'
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}