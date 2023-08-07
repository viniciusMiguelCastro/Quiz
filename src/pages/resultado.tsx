import { useRouter } from 'next/router'
import styles from '../styles/Resultado.module.css'
import Estatistica from '../../components/Estatistica'
import Botao from '../../components/Botao'

export default function resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: 'flex'}}>
                <Estatistica texto='Perguntas' valor={total} />
                <Estatistica texto='Certas' valor={certas} background='#9CD2A4'/>
                <Estatistica texto='Percentual' valor={`${percentual}%`} background={percentual < 50 ? '#FF6347': '#008B8B'}
                />
            </div>
            <Botao href='/' texto='Tentar Novamente'/>
        </div>
    )
}