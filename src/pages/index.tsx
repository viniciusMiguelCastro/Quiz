import { useEffect, useState } from 'react'
import QuestaoModel from '../../model/questao'
import Questionario from '../../components/Questionario'
import { useRouter } from 'next/router'


const BASE_URL = ('http://localhost:3000/api')

export default function Home() {
  const router = useRouter()
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [idQuestoes, setIdQuestoes] = useState<number[]>([])
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idQuestoes = await resp.json()
    setIdQuestoes(idQuestoes)
  }

  async function carregarQuestao(idQestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdQuestoes()
  }, [])

  useEffect(() => {
    idQuestoes.length > 0 && carregarQuestao(idQuestoes[0])
  }, [idQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    const proximoIndice = idQuestoes.indexOf(questao.id) + 1
    return idQuestoes[proximoIndice]
  }

  function nextStep() {
    const nextId = idProximaPergunta()
    nextId ? toNextQuestion(nextId) : finalizar()
  }

  function toNextQuestion(nextId: number) {
    carregarQuestao(nextId)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: idQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario questao={questao}
      ultima={idProximaPergunta === undefined}
      questaoRespondida={questaoRespondida}
      nextStep={nextStep}
    />
  ) : false
}
