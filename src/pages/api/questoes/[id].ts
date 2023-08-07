import questoes from '../bancoDeQuestoes'
export default function handler(req, res) {
    const idSelecionado = +req.query.id
    const questSelected = questoes.filter(quest => quest.id === idSelecionado)

    // if(questSelected.length === 1){
    //     res.status(200).json(questSelected[0].toObject())
    // }else{
    //     res.status(202).send(`<h1> Nao</h1>`)
    // }

    questSelected.length === 1 ? res.status(200).json(questSelected[0].embaralharRespostas().toObject()) : res.status(202).send(`<h1> Questao nao encontrada</h1>`)
}