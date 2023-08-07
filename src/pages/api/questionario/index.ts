import { embaralhar } from '../../../../functions/embaralharArray'
import questoes from '../bancoDeQuestoes'

export default (req, res) => {
    res.status(200).json(embaralhar(questoes.map(questao => questao.id)))
}