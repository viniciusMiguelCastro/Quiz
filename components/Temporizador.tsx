import styles from '../src/styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any,
    duracao: number,
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    '#008000',
                    '#FFFF00',
                    '#FF0000',
                ]}
                colorsTime={[10, 3, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}