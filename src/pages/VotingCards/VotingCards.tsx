import { useContext, useState } from 'react'
import {
  ButtonRegisterVoteSelected,
  Card,
  CardsContainer,
  IntroInstructionText,
  VotingContainer,
} from './VotingCards.styles'
import { PlanningPokerContext } from '../../contexts/PlanningPokerContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Task } from '../../reducers/planningPoker/reducers'
import { updateTaskList } from '../../api/requests/requests'

export function VotingCards() {
  const [voteRegister, setVoteRegister] = useState('')
  const [voteFinished, setVoteFinished] = useState(false)

  const { tasks, userName, addNewTaskItemToState, updateTaskItem } =
    useContext(PlanningPokerContext)

  const voteGradeOptions = ['0.5', '1', '2', '3', '5', '8']

  const { id } = useParams()
  const navigate = useNavigate()

  const taskIndexData = tasks?.find((task) => task.id === id) as Task

  function registerUpdateVoteOnApi(newTaskObject: Task) {
    const dataResponse = updateTaskList(newTaskObject).then((res) => res.data)

    return dataResponse
  }

  function handleVoteRegister(voteGrade: string) {
    const newTaskObject = {
      ...taskIndexData,
      votes: [{ user: userName, vote: Number(voteGrade) }],
    }

    registerUpdateVoteOnApi(newTaskObject).then((data) => {
      addNewTaskItemToState(data)
    })

    setVoteRegister(voteGrade)
  }

  function finishVoteAndShowResults() {
    if (voteRegister) {
      setVoteFinished(true)

      const deletedVoteTaskObject = {
        ...taskIndexData,
        result: voteRegister,
        votes: [],
      }

      registerUpdateVoteOnApi(deletedVoteTaskObject).then((data) => {
        updateTaskItem(data)
      })
    }
  }

  function returnToTaskListPage() {
    navigate('/task')
  }

  function renderCardsConditionally() {
    let cardsContent

    if (!voteFinished) {
      cardsContent = voteGradeOptions.map((option) => (
        <Card key={Number(option)} onClick={() => handleVoteRegister(option)}>
          {option}
        </Card>
      ))
    } else {
      cardsContent = voteGradeOptions.map((option) => (
        <Card key={Number(option)} isAlreadyVoted={voteFinished}>
          {option}
          <div>
            <span>%:</span>
            <span>{voteRegister === option ? '100' : '0'}</span>
          </div>
          <div>
            <span>Votos:</span>
            <span>{voteRegister === option ? '1' : '0'}</span>
          </div>
        </Card>
      ))
    }
    return cardsContent
  }

  return (
    <VotingContainer>
      {voteFinished ? (
        <IntroInstructionText>
          O vencedor foi o card de número&nbsp;<span>{voteRegister}</span>!
          &#127881;&#x1f973;
        </IntroInstructionText>
      ) : (
        <IntroInstructionText>
          <span>{userName}</span>, escolha um card.
        </IntroInstructionText>
      )}

      <CardsContainer>{renderCardsConditionally()}</CardsContainer>

      {voteFinished ? (
        <ButtonRegisterVoteSelected
          onClick={returnToTaskListPage}
          isAlreadyVoted={voteFinished}
        >
          Voltar para lista
        </ButtonRegisterVoteSelected>
      ) : (
        <ButtonRegisterVoteSelected
          disabled={!voteRegister}
          onClick={finishVoteAndShowResults}
        >
          Finalizar
        </ButtonRegisterVoteSelected>
      )}
    </VotingContainer>
  )
}
